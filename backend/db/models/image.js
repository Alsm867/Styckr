'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    Image.belongsTo(models.User, {foreignKey: 'userId'});
    Image.belongsTo(models.Album, {foreignKey: 'albumId'});
  };
  return Image;
};
