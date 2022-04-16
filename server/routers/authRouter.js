/* eslint-disable function-paren-newline */
/* eslint-disable indent */
const { Router } = require('express');
const { body } = require('express-validator');
const {
  registerUser, loginUser, logoutUser, refreshUser, getUsers,
} = require('../controllers/userController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { User } = require('../db/models');
const path = require('path')
const uuid = require('uuid')

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

authRouter.post('/editprofile', async (req, res, next) => {
    try {
        const { id, firstName, lastName, email, phone} = req.body
        // const {img} = req.file
        // let filename = uuid.v4() + '.jpg'
        // img.mv(path.resolve(__dirname, '..', 'static', filename))

        const user = await User.findOne({where: {id}})
        user.set({firstName,lastName, email, phone, avatarUrl: filename })
        await user.save()
        res.json(user)
    } catch (e) {
        console.log('EDIT profile Server ERR')
    }
        // GET /auth/refresh 401 return jwt_decode(data.token)  ! реализовать
    // Должен возвращать нового узера И наверное обновлять токен! Т.К вылетает 4000 ошибка после изменения данных
})


module.exports = authRouter;

