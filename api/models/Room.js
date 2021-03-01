const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema({
  roomCode: {
    type: String,
    required: [true, 'Room Code missing']
  },
  isActive: {
    type: Boolean,
    required: [true, 'Please indicate if the room is still in use']
  },
  adminID: {
    type: String,
    required: [true, 'Please add the admin user ID']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

/* 
ROOM
Id 
isActive (?)
adminID
*/

module.exports = mongoose.model('Room', RoomSchema);