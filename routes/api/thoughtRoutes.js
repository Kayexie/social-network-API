const router = require('express').Router();

const {
    getAllthoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought
} = require('../../controllers/thoughtController')

//get all thoughts
router.route('/').get(getAllthoughts).post(createThought)

//get a single thoughts by its id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought)
//post a new thoughts

module.exports = router;