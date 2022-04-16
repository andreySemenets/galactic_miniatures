/* eslint-disable prefer-template */
const uuid = require('uuid');
const path = require('path');
const { Item, File, Photo, Category, Subcategory } = require('../db/models');

module.exports.addItem = async (req, res, next) => {
	console.log('<<<<<<<addItem REQ BODY>>>>>>>', req.body);
	try {
		const { zip, photos } = req.files;
		const photoName = uuid.v4() + '.jpg';
		const zipName = uuid.v4() + '.zip';

		photos.mv(path.resolve(__dirname, '..', 'static', photoName));
		zip.mv(path.resolve(__dirname, '..', 'static', zipName));

		// const newCategory = await Category.create({ categoryTitle: req.body.category1 });
		// const newSubCategory = await Subcategory.create({ subCategoryTitle: req.body.category2 });

		const newItem = await Item.create({
			userId: 99,
			categoryId: 99,
			subCategoryId: 99,
			collectionId: 99,
			itemTitle: req.body.title,
			digitalPrice: 99,
			isApproved: false,
			description: req.body.description,
		});

		const newPhoto = await Photo.create({ itemId: newItem.dataValues.id, photoUrl: photoName });
		const zipArchive = await File.create({ itemId: newItem.dataValues.id, fileUrl: zipName });
		// console.log('PHOOOOTOOOOOSSSSS>>>', newPhoto);
		console.log('UUUUUUUUUUUU', newItem);
		return res.json(newItem);
	} catch (error) {
		console.error('{{{{{{addItem<<<<error>>>>}}}}}}', error);
		next(error);
	}
};
