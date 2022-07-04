'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    imageURL: DataTypes.STRING,
    businessId: {
      type: DataTypes.INTEGER,
      references: { model: 'Businesses' }
    },
    reviewId: {
      type: DataTypes.INTEGER,
      references: { model: 'Reviews' }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: { model: 'Users' }
    }
  }, {});
  Photo.associate = function (models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: 'userId' })
    Photo.belongsTo(models.Business, { foreignKey: 'businessId' })
    Photo.belongsTo(models.Review, { foreignKey: 'reviewId' })
  };
  return Photo;
};
