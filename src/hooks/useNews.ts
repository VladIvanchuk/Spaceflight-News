import { useQuery } from 'react-query';

import { api } from '../api/api';

export const useNews = () => {
  const { data, isFetched } = useQuery('news', api.getNews);

  return {
    data: Array.isArray(data) ? data : [],
    isFetched,
  };
};
