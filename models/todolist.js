'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todo.belongsTo(models.Activity, {foreignKey:"ActivityGroupId"})
    }
  }
  Todo.init({
    ActivityGroupId: {
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"Activity Group id cannot be empty"
        },
        notNull:{
          msg:"Activity Group id cannot be empty"
        }
      }
    },
    title:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:{
          msg:"title cannot be empty"
        },
        notNull:{
          msg:"title cannot be empty"
        }
      }
    },
    priority: DataTypes.STRING,
    isActive:DataTypes.BOOLEAN,
    deletedAt:DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};