'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    allowNull: false,
    message: DataTypes.STRING(280)
  }, {});
  Tweet.associate = function(models) {
    // associations can be defined here
  };
  return Tweet;
};