import axios from 'axios';

const ROOT_URL = 'https://api.spaceflightnewsapi.net';

export const api = Object.freeze({
  getNews: async () => {
    const { data } = await axios.get(`${ROOT_URL}/v3/articles`);

    return data;
  },
  getNewsById: async (id) => {
    const { data } = await axios.get(`${ROOT_URL}/v3/articles/${id}`);

    return data;
  },
});
