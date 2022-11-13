const Thought = require('../models/Thought');
const User = require('../models/User');

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
    //createThought and updating the user.
    createThought(req, res){
        Thought.create(req.body)
        .then((thought)=>{
            return User.findOneAndUpdate(
                {_id:req.body.userId},
                {$addToSet: {thoughts: thought._id}},
                {new: true}
            );
        })
        .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Application created, but found no user with that ID',
            })
          : res.json('Created a new thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
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
    //deltethought and also delete thought with the user.
    deleteThought(req, res){
        Thought.findOneAndRemove({_id: req.params.thoughtId})
        .then((thought)=>
        !thought
        ?res.status(404).json({message: 'thought not found'})
        :User.findOneAndUpdate(
            {thoughts: req.params.thoughtId},
            {$pull:{thoughts:req.params.thoughtId}},
            {new:true}
        )
        )
        .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought created but no user with this id!',
            })
          : res.json({ message: 'Thought successfully deleted!' })
      )
        .catch((err)=>res.status(500).json(err));
    },
    //add reaction to the thought
    addReaction(req, res) {
        Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message:'Successfully create reaction!'})
      )
      .catch((err) => res.status(500).json(err));
    },
    removeReaction(req, res){
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            {$pull:{reactions:{reactionId: req.params.reactionId}}},
            { new: true }
        )
        .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json({message:'Successfully delete this reaction!'})
      )
      .catch((err) => res.status(500).json(err));
    }
}