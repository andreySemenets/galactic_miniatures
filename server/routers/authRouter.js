/* eslint-disable function-paren-newline */
/* eslint-disable indent */
const { Router } = require('express');
const { body } = require('express-validator');
const {
  registerUser, loginUser, logoutUser, refreshUser, getUsers,
} = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { User } = require('../db/models');

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

authRouter.post('/editprofile', async (req, res) => {
    const { id, firstName, lastName, email, phone} = req.body

    console.log(id, firstName, lastName, email, phone)
    const user = await User.findOne({where: {id}})
    console.log('user EDIT BACK', user)
    user.set({firstName,lastName, email, phone })
    await user.save()
    res.json(user)
        //GET /auth/refresh 401
    // Должен возвращать нового узера И наверное обновлять токен! Т.К вылетает 4000 ошибка после изменения данных
})


module.exports = authRouter;

