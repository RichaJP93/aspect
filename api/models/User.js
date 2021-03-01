/* 
User
Id 
roomCode
isAdmin


*/


const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  roomCode: {
    type: String,
    required: [true, 'Please add the room code ID']
  },
  isAdmin: {
    type: Boolean,
    required: [true, 'Please indicate if the user is the Admin for the room']
  },
});


module.exports = mongoose.model('User', UserSchema);