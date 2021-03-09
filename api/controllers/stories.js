const Story = require('../models/Story');

// @desc Get all stories
// @route GET /api/v1/stories
// @access Public
// exports.getStories = async (req, res, next) => {
//     try {
//         const stories = await Story.find();

//         return res.status(200).json({
//             success: true,
//             count: stories.length,
//             data: stories
//         });
//     } catch (err) {
//         return res.status(500).json({
//             success:false,
//             error: err.message
//         });
//     }
// }


// @desc Get one story
// @route GET /api/v1/stories/:roomCode
// @access Public
exports.getStoryList = async (req, res, next) => {
  try {
      const storyList = await Story.find({"roomCode": `${req.params.roomCode}`});
      return res.status(200).json({
          success: true,
          count: storyList.length,
          storyList: storyList
      });
  } catch (err) {
      return res.status(500).json({
          success:false,
          error: err.message
      });
  }
}


// @desc Add a story
// @route POST /api/v1/stories/
// @access Public
exports.addStory = async (req, res, next) => {
    console.log(req.body)
    try {
        req.body.storyList.forEach(story => {
            Story.create({
                "description": story,
                "points": "0",
                "roomCode": req.body.roomCode
            });
        });
          
        return res.status(201).json({
            success: true           
        });
        
    } catch (err) {
        if(err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message);
  
            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
          console.log(err)
            return res.status(500).json({
                success:false,
                error: err.message
            });
        }
    }    
  }
  

// @desc Delete a story
// @route DELETE /api/v1/stories/:id
// @access Public
exports.deleteStory = async (req, res, next) => {
    try {
        const story = await Story.findById(req.params.id);

        if(!story){
            return res.status(404).json({
                success: false,
                error: 'Story ID not found'
            });
        }

        await story.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success:false,
            error: err.message
        });
    } 
}

// @desc Update a story
// @route PUT /api/v1/stories/:id
// @access Public
exports.updateStory = async (req, res, next) => {
    try {
        await Story.findOneAndUpdate({_id: req.params.id}, {
            description: req.body.description,
            points: req.body.points
        })
        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error: err.message
        });
    } 
}