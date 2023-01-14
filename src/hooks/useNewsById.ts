import { useQuery } from 'react-query';

import { api } from '../api/api';

export const useNewsById = (id: string | undefined) => {
  const { data, isFetchedAfterMount } = useQuery(['newsById', id], () =>
    api.getNewsById(id),
  );
  return {
    data,
    isFetchedAfterMount,
  };
};
