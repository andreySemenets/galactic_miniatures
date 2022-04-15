const express = require('express');
const { Op } = require('sequelize');
const { Item } = require('../db/models');

const itemsRouter = express.Router();

itemsRouter.get('/', async (req, res) => {
  try {
    const allItems = Item.findAll({ raw: true });
    res.json({ allItems });
  } catch (error) {
    console.log('{{{itemsRouter.get catch}}}', error);
  }
});

itemsRouter.post('/search', async (req, res) => {
  try {
    const search = req.body.itemTitle;
    const foundItems = await Item.findAll({ where: { itemTitle: { [Op.iLike]: `%${search}%` } } });
    res.json({ foundItems });
  } catch (error) {
    console.log('{{{{{searchItem err}}}}', error);
  }
});

module.exports = itemsRouter;
