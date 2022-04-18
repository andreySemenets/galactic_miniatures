const express = require('express');
const { Op } = require('sequelize');
const { Item } = require('../db/models');

const itemsRouter = express.Router();

itemsRouter.get('/', async (req, res) => {
	try {
		const allItems = Item.findAll({ raw: true });
		res.json({ allItems });
	} catch (error) {
		console.log('{{{itemsRouter.get("/") err}}}', error);
	}
});

itemsRouter.post('/item', async (req, res) => {
	try {
		const search = req.body.itemTitle;
		const foundItems = await Item.findAll({ where: { itemTitle: { [Op.iLike]: `%${search}%` } } });
		res.json({ foundItems });
	} catch (error) {
		console.log('{{{{{itemsRouter.post("/item") err}}}}', error);
	}
});

module.exports = itemsRouter;
