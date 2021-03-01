const mongoose = require('mongoose');

const StorySchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'Story description Missing']
  },
  points: {
    type: String
  },
  roomCode: {
    type: String,
    required: [true, 'Please add the room code ID']
  }
});


module.exports = mongoose.model('Story', StorySchema);

/* 
STORY
Id 
description
points
roomID

*/