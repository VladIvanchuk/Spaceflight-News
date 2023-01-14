//Core
import React, { useEffect, useState } from 'react';

//Components
import { Container, Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useNews } from '@src/hooks/useNews';
import { NewsCard } from '@src/components/NewsCard';

export const Home: React.FC = () => {
  const { data } = useNews();
  const [keyword, setKeyword] = useState('');
  const [filteredArticles, setFilteredArticles] = useState(data);

  useEffect(() => {
    const kw = keyword.trim();
    setFilteredArticles(
      data.filter((article) => {
        let match = false;
        kw.split(' ').forEach((keyword) => {
          if (
            article.title.toLowerCase().includes(keyword.toLowerCase()) ||
            article.summary.toLowerCase().includes(keyword.toLowerCase())
          ) {
            match = true;
          }
        });
        return match;
      }),
    );
  }, [data, keyword]);
  return (
    <>
      <Container maxWidth='lg'>
        <Box my={5}>
          <p className='text'>Filter by keywords</p>
          <Paper
            component='form'
            sx={{
              p: '1px 4px',
              display: 'flex',
              alignItems: 'center',
              width: 500,
            }}
          >
            <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder='Search'
              inputProps={{ 'aria-label': 'search google maps' }}
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Paper>
        </Box>
        <p className='text'>Results: {filteredArticles.length}</p>
        <hr />
        <Grid container mt={1} mb={10} spacing={5}>
          {filteredArticles.map((article) => (
            <NewsCard
              key={article.id}
              title={article.title}
              imageUrl={article.imageUrl}
              publishedAt={article.publishedAt}
              summary={article.summary}
              id={article.id}
              filteredArticles={filteredArticles}
              keywords={keyword}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};
