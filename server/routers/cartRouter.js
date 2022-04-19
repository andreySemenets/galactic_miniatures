const router = require('express').Router();
const { addItemToCart } = require('../controllers/cartController');

router.post('/:id', addItemToCart);

module.exports = router;
