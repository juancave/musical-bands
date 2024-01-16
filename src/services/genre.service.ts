import { Genre } from '../models';

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
