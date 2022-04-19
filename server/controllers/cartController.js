const { ShoppingCart, PhysicalCopy } = require('../db/models');

module.exports.addItemToCart = async (req, res, next) => {
	const physicalCopy = await PhysicalCopy.findOne({ where: { itemId: req.body.id }, raw: true });

	const itemInCart = await ShoppingCart.create({
		userId: req.body.userId,
		physicalCopyId: physicalCopy.id,
		orderNumber: Math.round(Math.random() * 10000),
		quantity: req.body.quantity,
	});

	res.json(itemInCart);
};
