/* eslint-disable function-paren-newline */
/* eslint-disable indent */
const { Router } = require('express');
const { body } = require('express-validator');
const {
  registerUser, loginUser, logoutUser, refreshUser, getUsers,
} = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const authRouter = new Router();

authRouter.post('/registration',
                body('email').isEmail(),
                body('password').isLength({ min: 4, max: 32 }),
                registerUser,
                );

authRouter.post('/login', loginUser);
authRouter.post('/logout', logoutUser);

authRouter.get('/refresh', refreshUser);
authRouter.get('/users', authMiddleware, getUsers);

module.exports = authRouter;
