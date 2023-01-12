//Core
import React from 'react';

//Components
import { Grid } from '@mui/material';
import { NewsCard } from './NewsCard';

export const NewsCards: React.FC = () => {
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const news = data.map((e) => <NewsCard key={e} />);

  return (
    <Grid container mt={1} mb={10} spacing={5}>
      {news}
    </Grid>
  );
};
