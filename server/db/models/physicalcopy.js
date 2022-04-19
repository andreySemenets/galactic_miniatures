const {
	Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class PhysicalCopy extends Model {
		static associate(models) {
			// define association here
			this.belongsTo(models.Item, { foreignKey: 'itemId' });
			this.hasMany(models.ShoppingCart, { foreignKey: 'physicalCopyId' });
		}
	}
	PhysicalCopy.init({
		itemId: DataTypes.INTEGER,
		color: DataTypes.STRING,
		scale: DataTypes.INTEGER,
		price: DataTypes.FLOAT,
	}, {
		sequelize,
		modelName: 'PhysicalCopy',
	});
	return PhysicalCopy;
};
