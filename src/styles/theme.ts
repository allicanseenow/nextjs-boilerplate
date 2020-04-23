import { createMuiTheme } from '@material-ui/core/styles';
import { red, pink } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#121858',
      main: '#1a237e',
      light: '#474f97',
      contrastText: 'white',
    },
    secondary: {
      dark: '#510bac',
      main: '#7510F7',
      light: '#903ff8',
      contrastText: 'white',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
      '&:not(:last-child)': {
        marginBottom: '1rem',
      },
    },
    subtitle1: {
      fontWeight: 300,
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: pink[300],
      },
    },
    MuiCard: {
      root: {
        borderRadius: 12,
        boxShadow: '0 5px 5px 0 rgba(150, 169, 177, 0.5), 0 0 0 1px #E6ECF8',
      },
    },
  },
});

export default theme;
