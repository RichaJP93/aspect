const User = require('../models/User');

// @desc Get all users
// @route GET /api/v1/users
// @access Public
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error:'Server error'
        });
    }
}

// @desc Get one user
// @route GET /api/v1/users/:id
// @access Public
exports.getUser = async (req, res, next) => {
    try {
        const user = await User.find({"_id": `${req.params.id}`});
  
        return res.status(200).json({
            success: true,
            count: user.length,
            data: user
        });
    } catch (err) {
        return res.status(500).json({
            success:false,
            error: err.message
        });
    }
  }

// @desc Add a user
// @route POST /api/v1/users/
// @access Public
exports.addUser = async (req, res, next) => {
    try {

        const user = await User.create(req.body);

        return res.status(201).json({
            success: true,
            data: user
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
  
// @desc Delete a user
// @route DELETE /api/v1/users/:id
// @access Public
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        if(!user){
            return res.status(404).json({
                success: false,
                error: 'User ID not found'
            });
        }

        await user.remove();

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

// @desc Update a user
// @route PUT /api/v1/users/:id
// @access Public
exports.updateUser = async (req, res, next) => {
    try {
        await User.findOneAndUpdate({_id: req.params.id}, {
            isAdmin: req.body.isAdmin
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