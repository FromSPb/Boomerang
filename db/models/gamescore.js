'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gameScore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gameScore.init({
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'gameScore',
  });
  return gameScore;
};