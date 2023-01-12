//Core
import React from 'react';

//Components
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container } from '@mui/material';
import { NewsCards } from '@src/components/NewsCards';

export const Home: React.FC = () => {
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
            />
          </Paper>
        </Box>
        <p className='text'>Results: 6</p>
        <hr />
        <NewsCards />
      </Container>
    </>
  );
};
