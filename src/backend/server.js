const express = require('express');
const app = express();
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');
const ACTIONS = require('../components/Actions.js');
const bodyParser = require('body-parser');

// db connection
const { connectMongodb, User } = require('./database.js');
connectMongodb();

app.use(bodyParser.json());



// registration of users
app.post('/signup', async (req, res) => {
  try {
      const { username, password, name } = req.body;
      if (!username || !password || !name) {
        console.log(req.body," values is not pring =>");
          return res.status(400).json({ error: 'Missing required fields' });
      }

      const newUser = new User({
          username,
          password,
          name,
      });

      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
  } catch (error) {
      console.error('Error saving user:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
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
