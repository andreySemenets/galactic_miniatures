const catalogRouter = require('express').Router();
const Models = require('../db/models');

catalogRouter.get('/', async (req, res) => {
	try {
		const result = await Models.Item.findAll({
			raw: true,
			where: {
				categoryId: 1,
			},
			include: [
				{
					model: Models.Category,
					where: { id: 1 },
					required: true,
				},
				{
					model: Models.Collection,
					required: true,
				},
				{
					model: Models.SubCategory,
					required: true,
				},
				{
					model: Models.Photo,
					attributes: ['photoUrl'],
					required: true,
				},
			],
			order: [['id', 'ASC']],
			limit: 8,
		});
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

module.exports = catalogRouter;
