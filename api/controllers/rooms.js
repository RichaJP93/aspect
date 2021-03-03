const Room = require('../models/Room');

// @desc Get all rooms
// @route GET /api/v1/rooms
// @access Public
exports.getRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find();

        return res.status(200).json({
            success: true,
            count: rooms.length,
            data: rooms
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server error'
        });
    }
}

// @desc Get one room
// @route GET /api/v1/rooms/:id
// @access Public
exports.getRoom = async (req, res, next) => {
  try {
      const {id}  = req.body;
      const room = await Room.find(id);

      return res.status(200).json({
          success: true,
          count: room.length,
          data: room
      });
  } catch (err) {
      return res.status(500).json({
          success:false,
          error:'Server error'
      });
  }
}

// @desc Add a room
// @route POST /api/v1/rooms/
// @access Public
exports.addRoom = async (req, res, next) => {
  try {
      const room = await Room.create(req.body);

      return res.status(201).json({
          success: true,
          data: room
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
              error: 'Server Error'
          });
      }
  }    
}

// @desc Delete a room
// @route DELETE /api/v1/rooms/:id
// @access Public
exports.deleteRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);

        if(!room){
            return res.status(404).json({
                success: false,
                error: 'Room ID not found'
            });
        }

        await room.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        });
    } 
}

// @desc Update a room
// @route PUT /api/v1/rooms/:id
// @access Public
exports.updateRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id);

        if(!room){
            return res.status(404).json({
                success: false,
                error: 'Room ID not found'
            });
        }

        await room.update({}, {
            isActive: req.body.isActive,
        });

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success:false,
            error: 'Server Error'
        });
    } 
}