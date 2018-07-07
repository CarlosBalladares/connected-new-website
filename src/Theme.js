import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  palette:{
    primary:{
      main:   '#ad1457',
      light:  '#e35183',
      dark:   '#78002e',
      contrastText: '#ffffff'
    },
    secondary:{
      main:   '#1a237e',
      light:  '#534bae',
      dark:   '#000051',
      contrastText: '#ffffff'
    },

    typography:{
      main:   '#ffffff'
    }
  }
});

export default Theme;
