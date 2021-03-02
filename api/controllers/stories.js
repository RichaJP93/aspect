const Story = require('../models/Story');

// @desc Get all stories
// @route GET /api/v1/stories
// @access Public
exports.getStories = async (req, res, next) => {
    try {
        const stories = await Room.find();

        return res.status(200).json({
            success: true,
            count: stories.length,
            data: stories
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server error'
        });
    }
}


// @desc Get one story
// @route GET /api/v1/stories/:id
// @access Public
exports.getStory = async (req, res, next) => {
  try {
      const {id}  = req.body;
      const story = await Story.find(id);

      return res.status(200).json({
          success: true,
          count: story.length,
          data: story
      });
  } catch (err) {
      return res.status(500).json({
          success:false,
          error:'Server error'
      });
  }
}
