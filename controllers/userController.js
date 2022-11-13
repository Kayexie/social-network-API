const User = require('../models/User');

module.exports = {
    //get all user
    getUsers(req, res) {
      User.find()
        .then((users)=>res.json(users))
        .catch((err)=>res.status(500).json(err));
    },
    //get a single user
    getSingleUser(req, res){
      User.findOne({ _id: req.params.userId})
        .select('-__v')
        // .populate('thoughts')
        .then((user)=>
        !user
        ?res.status(404).json({message: 'user not found'})
        :res.json(user)
        )
        .catch((err)=>res.status(500).json(err));
    },
    //create a single user
    createUser(req, res) {
        User.create(req.body)
        .then((dbUserData)=>res.json(dbUserData))
        .catch((err)=>res.status(500).json(err))
    },
    //delete a single user by id
    deleteUser(req, res) {
        User.findOneAndRemove({_id: req.params.userId})
        .then((user)=>
        !user
        ?res.status(404).json({message: 'user not found'})
        :res.json({message: 'user deleted!'})
        )
        .catch((err)=>res.status(500).json(err));
    },
    updateUser(req, res) {
        User.findOneAndUpdate(
        {_id: req.params.userId},
        {$set: req.body},
        {new: true})
        .then((user)=>
        !user
        ?res.status(404).json({message: 'user not found'})
        :res.json(user)
        )
        .catch((err)=>res.status(500).json(err));
    },
    addFriend(req, res) {
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$addToSet:{friends:req.params.friendId}},
            {new: true}
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json('We are friends now!')
      )
      .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res){
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$pull:{friends:req.params.friendId}},
            { new: true }
        )
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No User with this id!' })
          : res.json('not friend any more')
      )
      .catch((err) => res.status(500).json(err));
    }
}