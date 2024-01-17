import { Band, Genre } from '../models';

export const update = async (id: number, name: string) => {
  const count = await Band.update({ name }, { where: { id } });

  return count ? await Band.findByPk(id) : null;
};

export const create = async (name: string) => {
  const band = await Band.create({
    name,
  });

  return band;
};

export const all = async () => {
  return await Band.findAll({
    include: [{ model: Genre, through: { attributes: [] } }]
  });
};

export const byId = async (id: number) => {
  return await Band.findByPk(id, {
    include: [{ model: Genre, through: { attributes: [] } }]
  });
};
