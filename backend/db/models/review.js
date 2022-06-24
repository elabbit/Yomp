'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: {
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    buisnessId: {
      type: DataTypes.INTEGER,
      references: {model: 'Businesses'}
    },
    rating: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    review: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {});
  Review.associate = function(models) {
    // associations can be defined here
    Review.belongsTo(models.User, {foreignKey: 'userId'})
    Review.belongsTo(models.Business, {foreignKey: 'businessId'})
  };
  return Review;
};
