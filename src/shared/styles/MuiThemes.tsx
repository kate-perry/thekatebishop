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
      '@media (max-width:480px)': {
        fontSize: '3rem'
      },
    },
    h5: {
      color: palette.quinary,
      fontSize: '1.25rem',
      fontWeight: 400,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    h6: {
      color: palette.quinary,
      fontSize: '1.5rem',
      fontWeight: 300,
      margin: 0,
      '@media (max-width:480px)': {
        fontSize: '1rem'
      },
    },
    body1: {
      color: palette.quinary,
      fontSize: '1rem',
      fontWeight: 400,
      '@media (max-width:480px)': {
        fontSize: '.75rem'
      },
    }
  },
}));

export const resumeTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
  },
}))

export const portfolioTheme = responsiveFontSizes(createTheme({
  typography: {
    fontFamily: [
      'Open Sans',
    ].join(','),
    h1: {
      fontSize: '3rem',
      fontWeight: 300,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 800,
    },
    h6: {
      fontSize: '1.5rem',
      fontWeight: 300,
      margin: 0,
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 600,
      margin: 0,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 300,
    }
  },
}));
