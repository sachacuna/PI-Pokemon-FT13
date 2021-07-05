const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Type', {
    /*id: {
       type: DataTypes.UUID,
      primaryKey: true,
    }, */
    name: {
      type: DataTypes.STRING,
    },
  });
};
 