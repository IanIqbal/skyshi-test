'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.hasMany(models.Todo, { foreignKey: "ActivityGroupId" })
    }
  }
  Activity.init({
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:"title cannot be null"
        },
        notEmpty:{
          msg:"title cannot be null"
        }
      }
    },
    email: DataTypes.STRING,
    deletedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};