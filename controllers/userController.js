const User = require('../models/User');

module.exports = {
    //get all user
    getUsers(req, res) {
      User.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
    },
    //get a single user
    getUsers(req, res){
      User.findOne({ _id: req.params.userId})
        .select('-__v')
        .then((user)=>
        !user
        ?res.status(404).json({message: 'user not found'})
        :res.json(user)
        )
        .catch((err)=>res.status(500).json(err));
    },
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData)=>res.json(dbUserData))
        .catch((err)=>res.status(500).json(err))
    }
}