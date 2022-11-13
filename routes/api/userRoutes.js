const router = require('express').Router();

//todo: need to require the usercontroller;
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/userController')

// to get & post all users: /api/users/
router.route('/').get(getUsers).post(createUser);

// to get & put & delete a single user: /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;