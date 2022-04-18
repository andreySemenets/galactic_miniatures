const sortByCategoryRouter = require('express').Router();
const Models = require('../db/models');

sortByCategoryRouter.get('/', async (req, res) => {
	console.log(req.query);
	try {
		const { category, subCategory } = req.query;
		const result = await Models.Item.findAll({
			raw: true,
			include: [
				{
					model: Models.Category,
					where: { categoryTitle: category },
					required: true,
				},
				{
					model: Models.SubCategory,
					where: { subCategoryTitle: subCategory },
					required: true,
				},
				{
					model: Models.Photo,
					attributes: ['photoUrl'],
					required: true,
				},
			],
		});
		res.json({ result });
	} catch (error) {
		console.log(error);
	}
});

module.exports = sortByCategoryRouter;
