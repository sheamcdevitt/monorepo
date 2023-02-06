// material-ui
import { useTheme } from '@mui/material/styles';
import { useMediaQuery, Button, Stack } from '@mui/material';

// assets
// import Google from '../../assets/icons/google.svg';
import Twitter from '../../assets/icons/twitter.svg';
// import Facebook from '../../assets/icons/facebook.svg';

import { Google, Facebook } from '@mui/icons-material';

// ==============================|| FIREBASE - SOCIAL BUTTON ||============================== //

const FirebaseSocial = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

  const googleHandler = async () => {
    // login || singup
  };

  const twitterHandler = async () => {
    // login || singup
  };

  const facebookHandler = async () => {
    // login || singup
  };

  return (
    <Stack
      direction='row'
      spacing={matchDownSM ? 1 : 2}
      justifyContent={matchDownSM ? 'space-around' : 'space-between'}
      sx={{
        '& .MuiButton-startIcon': {
          mr: matchDownSM ? 0 : 1,
          ml: matchDownSM ? 0 : -0.5,
        },
      }}
    >
      <Button
        variant='outlined'
        color='primary'
        fullWidth={!matchDownSM}
        startIcon={<Google />}
        onClick={googleHandler}
        sx={{ width: '100%' }}
      >
        {!matchDownSM && 'Google'}
      </Button>
      <Button
        variant='outlined'
        color='primary'
        fullWidth={!matchDownSM}
        startIcon={<Facebook />}
        onClick={facebookHandler}
        sx={{ width: '100%' }}
      >
        {!matchDownSM && 'Facebook'}
      </Button>
    </Stack>
  );
};

export default FirebaseSocial;
