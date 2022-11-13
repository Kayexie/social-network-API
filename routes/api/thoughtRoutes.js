const router = require('express').Router();

const {
    getAllthoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController')

//get all thoughts
router.route('/').get(getAllthoughts).post(createThought)

//get a single thoughts by its id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)

//post a new reaction
router.route('/:thoughtId/reactions').post(addReaction)

//delete a reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction)
module.exports = router;