//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import EastIcon from '@mui/icons-material/East';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Card, CardContent, Grid, Typography } from '@mui/material';

export const NewsCard: React.FC = () => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <div className='card-img'>
          <img src='https://source.unsplash.com/random' alt='' />
        </div>
        <CardContent>
          <CalendarTodayIcon
            sx={{ fontSize: 15, mr: 1, color: 'text.secondary' }}
            color='secondary'
          />
          June 29th, 2021
          <Typography sx={{ mt: 2 }} variant='h5' gutterBottom>
            The 2020 Worlds Most Valuable Brands
          </Typography>
          <Typography sx={{ color: 'text.secondary', typography: 'body1' }}>
            Non sed molestie tortor massa vitae in mattis. Eget vel consequat
            hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
            pharetra...
          </Typography>
          <NavLink className='readMore' to={'/home/id'}>
            Read more
            <EastIcon sx={{ fontSize: 16, ml: 0.5, mt: 0.2 }} />
          </NavLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
