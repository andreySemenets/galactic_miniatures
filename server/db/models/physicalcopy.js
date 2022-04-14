const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PhysicalCopy extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
