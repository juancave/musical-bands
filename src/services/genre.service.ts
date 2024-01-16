import { where } from 'sequelize';
import { Genre } from '../models';

export const update = async (id: number, name: string) => {
  const count = await Genre.update({ name }, { where: { id } });

  return count ? await Genre.findByPk(id) : null;
};

export const create = async (name: string) => {
  const genre = await Genre.create({
    name,
  });

  return genre;
};

export const all = async () => {
  return await Genre.findAll();
};

export const byId = async (id: number) => {
  return await Genre.findByPk(id);
};
