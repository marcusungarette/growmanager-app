import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.3:3333',
});

export default {
  fetchEnvironment: async () => {
    const { data } = await api.get(
      'plants_environments?_sort=title&_order=asc',
    );
    return data;
  },

  fetchPlants: async (page: number) => {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`,
    );
    return data;
  },
};
