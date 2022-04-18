const router = require('express').Router();
const { addItem, getOneItem } = require('../controllers/itemController');

router.post('/new', addItem);
router.get('/:id', getOneItem);

module.exports = router;
