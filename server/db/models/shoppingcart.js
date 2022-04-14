const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ShoppingCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.PhysicalCopy, { foreignKey: 'physicalCopyId' });
    }
  }
  ShoppingCart.init({
    userId: DataTypes.INTEGER,
    physicalCopyId: DataTypes.INTEGER,
    orderNumber: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ShoppingCart',
  });
  return ShoppingCart;
};
