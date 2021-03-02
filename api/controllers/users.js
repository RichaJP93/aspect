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