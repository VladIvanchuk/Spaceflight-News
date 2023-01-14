//Core
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

//Components
import { Paper, Typography } from '@mui/material';
import WestIcon from '@mui/icons-material/West';
//Hooks
import { useNewsById } from '@src/hooks/useNewsById';

export const Article: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isFetchedAfterMount } = useNewsById(id);

  useEffect(() => {
    if (!data && isFetchedAfterMount) {
      navigate('..', { replace: true });
    }
  }, [data, isFetchedAfterMount]);

  const goBack = () => {
    navigate('..');
  };

  return (
    <div className='article'>
      <div className='img'>
        <img src={data?.imageUrl} alt='' />
      </div>
      <div>
        <Paper sx={{ mt: 20, mb: 5, pb: 2 }}>
          <Typography
            sx={{ p: 5, textAlign: 'center' }}
            variant='h5'
            gutterBottom
          >
            {data?.title}
          </Typography>
          <p className='text'>{data?.summary}</p>
        </Paper>
      </div>
      <a className='readMore back' onClick={goBack}>
        <WestIcon sx={{ fontSize: 16, mr: 0.5, mt: 0.2 }} /> Back to homepage
      </a>
    </div>
  );
};
