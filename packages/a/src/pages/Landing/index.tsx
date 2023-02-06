import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Page } from '@root/shared';
import { useNavigate } from 'react-router-dom';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Page style={{ display: 'flex', gap: '12rem' }}>
      <Typography variant='h1'>Project A - Sample Project</Typography>

      <Button
        variant='contained'
        color='secondary'
        onClick={() => navigate('/signup')}
      >
        Go to common component
      </Button>
    </Page>
  );
};

export default Landing;
