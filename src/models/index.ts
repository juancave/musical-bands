import { Sequelize } from 'sequelize';
import GenreModel from './genre.model';

const sequelize = new Sequelize('sqlite::memory:');

export const Genre = GenreModel(sequelize);

export const seed = async () => {
  await Genre.create({
    name: 'Rock',
  });
  await Genre.create({
    name: 'Reggae',
  });
  await Genre.create({
    name: 'Folk',
  });
  await Genre.create({
    name: 'Jazz',
  });
};

sequelize.sync({ force: true }).then(async () => {
  console.log('Database sync executed correctly');

  await seed();
  console.log('Database seeded correctly');
});
