import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  //centered content

  // spacing: (factor: number) => `${0.25 * factor}rem`,
  //this could be cool
  palette: {
    primary: {
      main: '#d36f70',
      dark: '#d36f70',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#fff',
      paper: '#fff',
    },
    success: {
      main: '#227722',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          margin: '0 5px',
          width: '180px',
          height: '50px',
          fontWeight: 'bold',
          fontFamily: 'QuickSand',
          textTransform: 'none',
        },
      },
    },
  },
  typography: {
    fontFamily: 'QuickSand',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600,
    h1: {
      fontWeight: 600,
      fontSize: '2.375rem',
      lineHeight: 1.21,
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
      lineHeight: 1.27,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.33,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    caption: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.57,
    },
    body2: {
      fontSize: '0.75rem',
      lineHeight: 1.66,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.57,
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 500,
      lineHeight: 1.66,
    },
    overline: {
      lineHeight: 1.66,
    },
    button: {
      textTransform: 'capitalize',
    },
  },
});

export const colors: { [name: string]: string } = {
  athensGray: '#FBFBFC',
  wildSand: '#F6F6F6',
  alto: '#E0E0E0',
  fadedText: 'rgb(0, 0, 0, 0.56)',
  moreFadedText: 'rgb(0, 0, 0, 0.4)',
  black: '#000',
  springWood: '#F5F0EB',
  lightBeige: '#FBF9F7',
  white: '#FFF',
  slate: '#4A3943',
  gold: '#FFD700',
  brick: '#FB4824',
  red: '#FF0000',
  guardsmanRed: '#BC0000',
  fadedRed: 'rgba(188,0,0, 0.6)',
  crimson: '#D1185E',
  rouge: '#993366',
  fadedPink: 'rgba(153,51,102, 0.6)',
  fadedPurple: 'rgba(107, 85, 145, 0.6)',
  fadedMaroon: 'rgba(81, 52, 77, 0.6)',
  internationalKleinBlue: '#0033b6',
  regalBlue: '#004E67',
  fadedBlue: 'rgba(0,78,103, 0.6)',
  aquamarineBlue: '#74D5DE',
  saltpan: '#EAF3E9',
  green: '#1BC000',
  caribbeanGreen: '#00C08C',
  japaneseLaurel: '#038000',
  fadedGreen: 'rgba(3, 128, 0, 0.6)',
  chelseaGem: '#A95B00',
  fadedBrown: 'rgba(189, 79, 0, 0.6)',
  goldDrop: '#E08700',
  muddyWaters: '#B8846B',
  mystic: '#E9ECF3',
  fadedYellow: '#FFFCD9',
  concrete: '#CDBBB3',

  bone: '#f3f3f3',
  redDamask: '#D25647',
  newYorkPink: '#D36F71',
  outerSpace: '#343A40',
};
