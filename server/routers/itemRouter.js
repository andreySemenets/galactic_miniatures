const router = require('express').Router();
const { addItem } = require('../controllers/itemController');

router.post('/new', addItem);

module.exports = router;
