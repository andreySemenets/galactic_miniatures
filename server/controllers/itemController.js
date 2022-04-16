/* eslint-disable prefer-template */
const uuid = require('uuid');
const path = require('path');
const { Item, Tag, File, Photo, Category, SubCategory } = require('../db/models');

module.exports.addItem = async (req, res, next) => {
	console.log('<<<<<<<addItem REQ BODY>>>>>>>', req.body);
	try {
		// const { zip, photos } = req.files;
		// const photoName = uuid.v4() + '.jpg';
		// const zipName = uuid.v4() + '.zip';

		// photos.mv(path.resolve(__dirname, '..', 'static', photoName));
		// zip.mv(path.resolve(__dirname, '..', 'static', zipName));

		const category = await Category.findOne({
			where: { categoryTitle: req.body.category1 }, raw: true,
		});
		// console.log('Category ++++++>>>>', categoryId.id);
		const subCategory = await SubCategory.findOne({
			where: { subCategoryTitle: req.body.category2 }, raw: true,
		});
		// console.log('Category2 ++++++>>>>', subCategoryId.id);

		// ===================================================================
		const tagIdArr = []; // собираем айдишники всех прилетающих тегов
		let postId; // ждем айдишник нового поста

		const { tags } = req.body;
		// ОПЕРАЦИИ ПО ТЕГАМ
		tags.forEach(async (tag) => {
			const existingTag = await Tag.findOne({ where: { tagName: tag } });
			if (existingTag) {
				tagIdArr.push(existingTag.id);
			} else {
				const newTag = await Tag.create({ tagName: tag });
				tagIdArr.push(newTag.id);
			}
		});

		// ОПЕРАЦИИ ПО СВЯЗУЮЩЕЙ ТАБЛИЦЕ
		tagIdArr.forEach(async (el) => {
			await Entry_tag.create({ entryId: postId, tagId: el });
		});
		// ===================================================================

		const newItem = await Item.create({
			userId: 4,
			categoryId: category.id,
			subCategoryId: subCategory.id,
			collectionId: 3,
			itemTitle: req.body.title,
			digitalPrice: req.body.scale,
			isApproved: false,
			description: req.body.description,
		});

		// const newPhoto = await Photo.create({ itemId: newItem.dataValues.id, photoUrl: photoName });
		// const zipArchive = await File.create({ itemId: newItem.dataValues.id, fileUrl: zipName });
		// // console.log('PHOOOOTOOOOOSSSSS>>>', newPhoto);
		// return res.json();
		return res.end();
	} catch (error) {
		console.error('{{{{{{addItem<<<<error>>>>}}}}}}', error);
		next(error);
	}
};
