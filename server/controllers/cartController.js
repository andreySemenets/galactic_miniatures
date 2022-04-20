const { ShoppingCart, PhysicalCopy } = require('../db/models');

module.exports.addItemToCart = async (req, res, next) => {
	const physicalCopy = await PhysicalCopy.findOne({ where: { itemId: req.body.id }, raw: true });

	const itemInCart = await ShoppingCart.create({
		userId: req.body.userId,
		physicalCopyId: physicalCopy.id,
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
			include: [
				{
					model: PhysicalCopy,
					attributes: ['itemId', 'color', 'scale', 'price'],
				},
			],
		});
		res.json(result);
	} catch (error) {
		console.log(error, 'cartitems{{{{{{{{{');
	}
};

module.exports.deleteItemCart = async (req, res, next) => {
	try {
		console.log('deleteItemCart' ,req.params)
		const {userId,itemId } = req.params
		const itemDelete = await ShoppingCart.findOne({where: {id: itemId,}});
		itemDelete.destroy()
		const result = await ShoppingCart.findAll({
			raw: true,
			where: {
				userId: +userId,
			},
			include: [
				{
					model: PhysicalCopy,
					attributes: ['itemId', 'color', 'scale', 'price'],
				},
			],
		});
		res.json(result);

	}  catch (error) {
		console.log(error, 'deleteItemCart ERROR')
	}
}
