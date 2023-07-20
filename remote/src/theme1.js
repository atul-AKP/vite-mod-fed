import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(1, 142, 255)'
    },
    secondary: {
      main: '##ECEFF4'
    },
    background: {
      default: '#FFFFFF'
    },
    text: {
      primary: 'rgb(107, 114, 128)'
    }
  },
  typography: {
    fontFamily: 'Graphik Medium',
    h1: {
      fontSize: '14px',
      fontFamily: 'Graphik Medium',
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: '-0.25px',
      textAlign: 'center',
      lineHeight: '14px'
    },
    body1: {
      fontSize: '14px',
      fontFamily: 'Graphik Medium',
      fontWeight: 500,
      fontStyle: 'normal',
      letterSpacing: '-0.25px',
      textAlign: 'center',
      lineHeight: '14px'
    },
    subtitle1: {
      fontSize: '10px',
      fontFamily: 'Graphik Semibold',
      fontWeight: 600,
      fontStyle: 'normal',
      letterSpacing: '0.25px',
      textAlign: 'left',
      lineHeight: '10px',
      textTransform: 'uppercase'
    }
  },
  spacing: 2, // Adjust the spacing value as needed
  shadows: ['rgba(33, 43, 54, 0.1)'] // Add more shadows as needed
})

export default theme
