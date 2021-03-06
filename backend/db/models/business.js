'use strict';
module.exports = (sequelize, DataTypes) => {
  const Business = sequelize.define('Business', {
    ownerId: {
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    zipcode: {
      allowNull: false,
      type: DataTypes.STRING(5)
    },
    phoneNumber: {
      allowNull: false,
      type: DataTypes.STRING(10)
    },
    website: {
      type: DataTypes.STRING(250)
    },
    rating:{
      allowNull: false,
      type: DataTypes.DECIMAL,
      defaultValue:0
    }

  }, {});
  Business.associate = function(models) {
    // associations can be defined here
    Business.belongsTo(models.User, {foreignKey: 'ownerId'})
    Business.hasMany(models.Review, {foreignKey: 'businessId', onDelete: 'cascade',
    hooks: true})
    Business.hasMany(models.Photo, {foreignKey: 'businessId', onDelete: 'cascade',
    hooks: true})
  };
  return Business;
};
