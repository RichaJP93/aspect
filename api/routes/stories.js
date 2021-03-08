const express = require('express');
const router = express.Router();
const {getStory, addStory, updateStory, deleteStory} = require('../controllers/stories');

router
    .route('/')   
    .post(addStory);
router
    .route('/:roomCode')    
    .get(getStory)  
router
    .route('/:id')    
    .put(updateStory)
    .delete(deleteStory);

module.exports = router;