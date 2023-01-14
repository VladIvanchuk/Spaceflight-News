//Core
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import EastIcon from '@mui/icons-material/East';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import { INewsCard } from '@src/types/newsType';
import { useHighlightKeywords } from '@src/hooks/useHighlightKeywords';

export const NewsCard: React.FC<INewsCard> = (props) => {
  const { title, imageUrl, publishedAt, summary, id, keywords } = props;
  const date = new Date(publishedAt);
  const formattedDate = format(date, 'MMMM do, yyyy');

  const highlightedTitle = useHighlightKeywords(title, keywords.split(' '));
  const highlightedSummary = useHighlightKeywords(
    summary.substring(0, 100),
    keywords.split(' '),
  );

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <div className='card-img'>
          <img src={imageUrl} alt='' />
        </div>
        <CardContent>
          <CalendarTodayIcon
            sx={{ fontSize: 15, mr: 1, color: 'text.secondary' }}
            color='secondary'
          />
          {formattedDate}
          <Typography sx={{ mt: 2 }} variant='h5' gutterBottom>
            {highlightedTitle}
          </Typography>

          <Typography sx={{ color: 'text.secondary', typography: 'body1' }}>
            {summary && highlightedSummary}
            ...
          </Typography>
          <NavLink className='readMore' to={'/news/' + id}>
            Read more
            <EastIcon sx={{ fontSize: 16, ml: 0.5, mt: 0.2 }} />
          </NavLink>
        </CardContent>
      </Card>
    </Grid>
  );
};
