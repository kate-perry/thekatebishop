import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { palette } from '../utils/constants';

export const headerTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      color: 'white',
      fontSize: '9rem',
      fontWeight: 800,
      // '@media (max-width:480px)': {
      //   fontSize: '4rem'
      // },
    },
    h5: {
      color: palette.quinary,
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      color: palette.quinary,
      fontSize: '1.5rem',
      fontWeight: 300,
      margin: 0,
    },
    body1: {
      color: palette.quinary,
      fontSize: '1rem',
      fontWeight: 400,
    }
  },
}));
