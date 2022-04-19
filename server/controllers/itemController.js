/* eslint-disable prefer-template */
const uuid = require('uuid');
const path = require('path');
const {
	Tag,
	File,
	Item,
	Photo,
	Category,
	SubCategory,
	ItemsAndTag,
	PhysicalCopy,
} = require('../db/models');

module.exports.addItem = async (req, res, next) => {
	console.log('<<<<<<<addItem REQ BODY>>>>>>>', req.body);

	try {
		const { zip, photos } = req.files;
		console.log('"!!!req.files!!!"', req.files);
		console.log('"!!!!!!!photos!!!!!!!"', photos);
		console.log('"!!!!!!!zip!!!!!!!"', zip);
		const photoName = uuid.v4() + '.jpg';
		const zipName = uuid.v4() + '.zip';

		photos.mv(path.resolve(__dirname, '..', 'static', photoName));
		zip.mv(path.resolve(__dirname, '..', 'static', zipName));

		const category = await Category.findOne({
			where: { categoryTitle: req.body.category1 }, raw: true,
		});

		const subCategory = await SubCategory.findOne({
			where: { subCategoryTitle: req.body.category2 }, raw: true,
		});

		const newItem = await Item.create({
			userId: 4, 													// ХАРДКОД
			categoryId: category.id,
			subCategoryId: subCategory.id,
			collectionId: 3, 										// ХАРДКОД
			itemTitle: req.body.title,
			digitalPrice: req.body.scale,
			isApproved: false,
			description: req.body.description,
		});

		// ===================================================================

		const tagIdArr = [];

		const tagsArr = req.body.tags;

		tagsArr.forEach(async (tag) => {
			const existingTag = await Tag.findOne({ where: { tagName: tag } });
			if (existingTag) {
				tagIdArr.push(existingTag.id);
			} else {
				const newTag = await Tag.create({ tagName: tag });
				tagIdArr.push(newTag.id);
			}
		});

		// УБРАТЬ ЭТОТ КОСТЫЛЬ ПЕРЕПИСАВ НА THEN'ы
		setTimeout(() => {
			tagIdArr.forEach(async (el) => {
				await ItemsAndTag.create({ itemId: newItem.id, tagId: el });
			});
		}, 2000);

		// ===================================================================

		await Photo.create({ itemId: newItem.dataValues.id, photoUrl: photoName });
		await File.create({ itemId: newItem.dataValues.id, fileUrl: zipName });

		return res.json(newItem);
	} catch (error) {
		console.error('{{{{{{addItem<<<<error>>>>}}}}}}', error);
		next(error);
	}
};

module.exports.getOneItem = async (req, res, next) => {
	console.log('IDDDDDDDDDD >>>>', req.params.id);
	try {
		const item = await Item.findOne({
			where: {
				id: req.params.id,
			},
			include: [
				{
					model: Photo,
					attributes: ['photoUrl'],
					required: true,
				},
				// {
				// 	model: PhysicalCopy,
				// 	required: true,
				// },
			],
			raw: true,
		});

		console.log('ITEM >>>>', item);
		res.json(item);
	} catch (error) {
		console.error('{{{{{{getOneItem<<<<error>>>>}}}}}}', error);
		next(error);
	}
};

module.exports.getAllItems = async (req, res, next) => {
	try {
		const allItems = await Item.findAll({
			raw: true,
			include: [
				{
					model: Photo,
					attributes: ['photoUrl'],
				},
			],
			limit: 4,
		});
		res.json(allItems);
	} catch (error) {
		console.error('{{{{{{getOneItem<<<<error>>>>}}}}}}', error);
		next(error);
	}
};
