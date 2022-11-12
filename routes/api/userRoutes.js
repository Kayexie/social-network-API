const router = require('express').Router();

//todo: need to require the usercontroller;


// to get & post all users: /api/users/
router.route('/').get().post();

// to get & put & delete a single user: /api/users/:userId
router.route('/:userId').get().put().delete();

module.exports = router;