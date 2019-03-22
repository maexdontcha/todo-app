import { createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import yellow from '@material-ui/core/colors/yellow'
import red from '@material-ui/core/colors/red'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { background } from 'styled-system'

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00897b'
    },
    secondary: {
      main: '#ef6c00'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(',')
    // fontFamily:
    // 'BlinkMacSystemFont',
    // '"Segoe UI"',
    // 'Roboto',
    // '"Helvetica Neue"',
    // 'Arial',
    // 'sans-serif',
    // '"Apple Color Emoji"',
    // '"Segoe UI Emoji"',
    // '"Segoe UI Symbol"',
  }
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    // primary: {
    //   light: '#333',
    //   main: '#000',
    //   contrastText: '#ffcc00'
    // },

    primary: {
      main: '#FF9800'
    },
    secondary: {
      main: '#ffd180'
    }

    // primary: blueGrey,
    // secondary: blueGrey
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto'
    ].join(',')
  },
  overrides: {
    MuiInput: {
      root: {
        backgroundColor: 'black !important'
      }
    }
  }
})
