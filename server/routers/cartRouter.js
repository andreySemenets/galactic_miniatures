const router = require('express').Router();
const { addItemToCart, getUsersCartItems } = require('../controllers/cartController');

router
	.post('/new', addItemToCart)
	.get('/:userId', getUsersCartItems);

module.exports = router;
