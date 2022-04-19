const router = require('express').Router();
const { addItem, getOneItem, getAllItems } = require('../controllers/itemController');

router.get('/', getAllItems);
router.post('/new', addItem);
router.get('/:id', getOneItem);

module.exports = router;
