import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import yellow from '@material-ui/core/colors/yellow'
import red from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { background } from 'styled-system'

const defaultTheme = {
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(','),
    h1: {
      fontSize: '2.25rem',
      fontWeight: 600
    },
    h3: {
      fontSize: '1.2rem'
    },
    h6: {
      fontSize: '1rem'
    },
    subtitle1: {
      fontSize: '0.7rem'
    },
    subtitle2: {
      fontSize: '0.66rem'
    }
  }
}

export const lightTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    primary: {
      main: '#00897b'
    },
    secondary: {
      main: '#ef6c00'
    }
  }
})
// console.log(lightTheme)
export const darkTheme = createMuiTheme({
  ...defaultTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#54C9C4'
    },
    secondary: {
      main: '#ffd180'
    }
  },
  overrides: {
    MuiInput: {
      root: {
        backgroundColor: 'black !important'
      }
    }
  }
})
