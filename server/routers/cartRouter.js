const router = require('express').Router();
const { addItemToCart } = require('../controllers/cartController');

router.post('/new', addItemToCart);

module.exports = router;
