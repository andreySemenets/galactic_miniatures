const uuid = require('uuid');
const {
	Cart,
	PhysicalCopy,
} = require('../db/models');

module.exports.addItemToCart = async (req, res, next) => {
	const physicalCopy = await PhysicalCopy.findByPk({ itemId: req.body.id });

	const itemInCart = await Cart.create({
		userId: 3,
		physicalCopyId: physicalCopy.id,
		orderNumber: uuid.v4(),
		quantity: req.body.quantity,
	});
};
