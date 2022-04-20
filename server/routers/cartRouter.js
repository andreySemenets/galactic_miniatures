const router = require('express').Router();
const { addItemToCart, getUsersCartItems, deleteItemCart } = require('../controllers/cartController');

router
	.post('/new', addItemToCart)
	.get('/:userId', getUsersCartItems)
	.post('/:userId/:itemId', deleteItemCart );

module.exports = router;
