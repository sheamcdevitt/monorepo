import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { colors, theme } from '../../themes/theme';

const useStyles = makeStyles({
  root: {
    backgroundColor: colors.white,
    marginTop: '8rem',
    marginBottom: '8rem',
    marginRight: 'auto',
    marginLeft: 'auto',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      marginTop: '6rem',
    },
  },
});

interface PageProps {
  style?: React.CSSProperties;
}

export const Page: React.FC<PageProps> = (props) => {
  const styles = useStyles();
  return (
    <Container className={styles.root} maxWidth='lg' style={{ ...props.style }}>
      {props.children || <div />}
    </Container>
  );
};

//TODO: *MVP* make responsive
