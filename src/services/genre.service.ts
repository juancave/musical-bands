// mock data
const genre = {
  id: 1,
  name: 'Genre 1',
  createdAt: new Date(),
};

export const all = async () => {
  return [
    genre
  ];
}

export const byId = async (id: number) => {
  return genre;
}
