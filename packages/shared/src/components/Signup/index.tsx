import React, { useState } from 'react';
import { Page } from '@root/shared';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  Grid,
  Link,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from '@mui/material';
import FirebaseSocial from './FirebaseSocial';
import { Link as RouterLink } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  strengthColor,
  strengthIndicator,
} from '../../utils/password-strength';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    display: 'flex',
    gap: '12rem',
    maxWidth: '30rem',

    padding: '2rem',
  },
});

export const Signup: React.FC = () => {
  const styles = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const [level, setLevel] = useState<{ label: string; color: string }>();
  const [hasAccount, setHasAccount] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const changePassword = (value: string) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  return (
    <Page>
      <Box className={styles.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor='company-signup'>Email</InputLabel>
              <OutlinedInput
                fullWidth
                // error={Boolean(touched.company && errors.company)}
                id='company-signup'
                // value={values.company}
                name='company'
                // onBlur={handleBlur}
                // onChange={handleChange}
                placeholder='yourname@example.com'
                inputProps={{}}
              />
              {/* {touched.company && errors.company && (
              <FormHelperText error id='helper-text-company-signup'>
                {errors.company}
              </FormHelperText>
            )} */}
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <InputLabel htmlFor='password-signup'>Password</InputLabel>
              <OutlinedInput
                fullWidth
                // error={Boolean(touched.password && errors.password)}
                id='password-signup'
                type={showPassword ? 'text' : 'password'}
                // value={values.password}
                name='password'
                // onBlur={handleBlur}
                onChange={(e) => {
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                      size='large'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {/* {touched.password && errors.password && (
              <FormHelperText error id='helper-text-password-signup'>
                {errors.password}
              </FormHelperText>
            )} */}
            </Stack>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <Grid container spacing={2} alignItems='center'>
                <Grid item>
                  <Box
                    sx={{
                      bgcolor: level?.color,
                      width: 85,
                      height: 8,
                      borderRadius: '7px',
                    }}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='subtitle1' fontSize='0.75rem'>
                    {level?.label}
                  </Typography>
                </Grid>
              </Grid>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2'>
              By Signing up, you agree to our &nbsp;
              <Link variant='subtitle2' component={RouterLink} to='#'>
                Terms of Service
              </Link>
              &nbsp; and &nbsp;
              <Link variant='subtitle2' component={RouterLink} to='#'>
                Privacy Policy
              </Link>
            </Typography>
          </Grid>
          {/* {errors.submit && (
          <Grid item xs={12}>
            <FormHelperText error>{errors.submit}</FormHelperText>
          </Grid>
        )} */}
          <Grid item xs={12}>
            <Button
              disableElevation
              disabled={false}
              fullWidth
              size='large'
              type='submit'
              variant='contained'
              color='primary'
              sx={{ width: '100%' }}
            >
              {hasAccount ? 'Log in' : 'Create Account'}
            </Button>
            <Typography variant='body1' sx={{ mt: 2 }}>
              {hasAccount
                ? 'Don’t have an account?'
                : 'Already have an account?'}
              &nbsp; &nbsp;
              <Link
                variant='body1'
                component={RouterLink}
                to='#'
                onClick={() => setHasAccount(!hasAccount)}
              >
                {hasAccount ? 'Create one' : 'Log in'}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider>
              <Typography variant='caption'>Continue with</Typography>
            </Divider>
          </Grid>
          <Grid item xs={12}>
            <FirebaseSocial />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

// export default Signup;
