const router = require('express').Router();

//todo: need to require the usercontroller;
const {
    getUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

// to get & post all users: /api/users/
router.route('/').get(getUsers).post(createUser);

// to get & put & delete a single user: /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

//to add & remove a friend to user's friend list

router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend)

module.exports = router;