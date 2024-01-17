import { Sequelize } from 'sequelize';
import GenreModel from './genre.model';
import BandModel from './band.model';

const sequelize = new Sequelize('sqlite::memory:');

export const Band = BandModel(sequelize);
export const Genre = GenreModel(sequelize);

const bandGenresRelation = {
  through: 'Band_Genre',
};

Band.belongsToMany(Genre, bandGenresRelation);
Genre.belongsToMany(Band, bandGenresRelation);

sequelize.sync({ force: true }).then(async () => {
  console.log('Database sync executed correctly');

  await seed();

  console.log('Database seeded correctly');
});

const seed = async () => {
  await Band.create(
    {
      name: 'Queen',
      Genres: [
        { name: 'Rock' },
      ],
    },
    { include: Genre }
  );
  await Band.create(
    {
      name: 'The Skatalites',
      Genres: [
        { name: 'Jazz' },
        { name: 'Ska' },
        { name: 'Calypso' },
      ],
    },
    { include: Genre }
  );
  await Band.create(
    {
      name: 'Bob Marley',
      Genres: [
        { name: 'Reggae' },
      ],
    },
    { include: Genre }
  );
  await Band.create(
    {
      name: 'Quilapayún',
      Genres: [
        { name: 'Folk' },
        { name: 'Nueva Canción Chilena' },
      ],
    },
    { include: Genre }
  );
};