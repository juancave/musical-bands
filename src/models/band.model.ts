import { Sequelize, DataTypes } from 'sequelize';

const BandModel = (sequelize: Sequelize) => sequelize.define('Band', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
});

export default BandModel;
