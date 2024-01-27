const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const ACTIONS = require('../components/Actions.js');
const bodyParser = require('body-parser');
const passport = require('passport');
const expressSession = require('express-session');
// db connection
const { connectMongodb, User } = require('./database.js');
const { initializingPassport } = require('./passportConfig.js');
connectMongodb();

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(expressSession({ 
  secret: "mySecret", 
  resave: false,
   saveUninitialized: false
   }));
app.use(passport.session());
app.use(passport.initialize());



initializingPassport(passport);



// login 

app.post('/login',passport.authenticate('local'),async(req,res)=>{
   res.redirect("http://localhost:3000/join-room");
})

// registration of users
app.post('/signup', async (req, res) => {
  console.log(req.body,"body value");
  const user = await User.findOne({ username: req.body.username });
  if (user) return res.status(400).send('This user is already exists');
  const newUser = await User.create(req.body);
  res.redirect('http://localhost:3000/login');
});


// socket connection
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('build'));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const userSocketMap = {};

function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map((socketId) => {
    return {
      socketId,
      username: userSocketMap[socketId],
    };
  });
}

io.on('connection', (socket) => {
  console.log('socket connected', socket.id);

  socket.on(ACTIONS.JOIN, ({ roomId, username }) => {
    userSocketMap[socket.id] = username;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    console.log(clients);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit(ACTIONS.JOINED, {
        clients,
        username,
        socketId: socket.id,
      });
    });
  });

  socket.on(ACTIONS.CODE_CHANGE, ({ roomId, content }) => {
    socket.to(roomId).emit(ACTIONS.CODE_CHANGE, { content });
  });

  socket.on(ACTIONS.SYNC_CODE, ({ socketId, content }) => {
    io.to(socketId).emit(ACTIONS.CODE_CHANGE, { content });
  });

  socket.on('disconnecting', () => {
    const rooms = [...socket.rooms];
    rooms.forEach((roomId) => {
      socket.in(roomId).emit(ACTIONS.DISCONNECTED, {
        socketId: socket.id,
        username: userSocketMap[socket.id],
      });
    });
    delete userSocketMap[socket.id];
    socket.leave();
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
