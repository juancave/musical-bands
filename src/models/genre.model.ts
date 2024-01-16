import { Sequelize, DataTypes } from 'sequelize';

const GenreModel = (sequelize: Sequelize) => sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: DataTypes.STRING,
});

export default GenreModel;
