
const express = require('express');
const { getAllUsers, getUserById, addNewUser, updateUser, deleteUser, userCount } = require('../controller/userController');
const { login, register } = require('../controller/authController');
const router = express.Router();


router.get(`/`, getAllUsers);
router.get('/:id', getUserById)
router.get(`/get/count`, userCount)

router.post('/', addNewUser)
router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

// Auth
router.post('/login', login)
router.post('/register', register)


module.exports =router;