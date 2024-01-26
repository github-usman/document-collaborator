const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/document-collaborator';

exports.connectMongodb=()=>{
    mongoose.connect(uri,{})
    .then(e=>{
        process.stdout.write(`Connect to MongoDB Successfully: ${e.connection.port}`)
    })
    .catch(e=>{
        process.stdout.write(`Error DB connectivity ${e}`);
    })
}


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true,
    }
   
});

exports.User = mongoose.model("User", userSchema);