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

module.exports.getUsersCartItems = async (req, res, next) => {
	try {
		const { userId } = req.params;
		console.log(userId, '<<<<<<<<<::::');
		const result = await ShoppingCart.findAll({
			raw: true,
			where: {
				userId: +userId,
			},
		});
		res.json(result);
	} catch (error) {
		console.log(error, 'cartitems{{{{{{{{{');
	}
};
