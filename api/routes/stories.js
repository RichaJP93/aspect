const express = require('express');
const router = express.Router();
const {getStory, addStory, updateStory, deleteStory} = require('../controllers/stories');

router
    .route('/')   
    .post(addStory);

router
    .route('/:id')    
    .get(getStory)    
    .put(updateStory)
    .delete(deleteStory);

module.exports = router;