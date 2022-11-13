const Thought = require('../models/Thought');

module.exports = {
    getAllthoughts(req, res) {
        Thought.find()
        .then((thoughts)=>res.json(thoughts))
        .catch((err)=>res.status(500).json(err));
    },
    getSingleThought(req, res){
        Thought.findOne({_id:req.params.thoughtId})
        .select('-__v')
        .then((thought)=>
        !thought
        ?res.status(404).json({message: 'thought not found'})
        :res.json(thought)
        )
        .catch((err)=>res.status(500).json(err));
    },
    createThought(req, res){
        Thought.create(req.body)
        .then((dbUserData)=>res.json(dbUserData))
        .catch((err)=>res.status(500).json(err))
    },
    updateThought(req, res){
        Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$set: req.body},
            {new: true})
            .then((thought)=>
            !thought
            ?res.status(404).json({message: 'thought not found'})
            :res.json(thought)
            )
            .catch((err)=>res.status(500).json(err));
    },
    deleteThought(req, res){
        Thought.findOneAndRemove({_id: req.params.thoughtId})
        .then((thought)=>
        !thought
        ?res.status(404).json({message: 'thought not found'})
        :res.json(thought)
        )
        .catch((err)=>res.status(500).json(err));
    }
}