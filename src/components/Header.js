import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


function styles(theme){
  return({
    root:{
      flexGrow: 1
    },
    flex:{
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });
}

function Header(props){
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="title"  color="inherit" className={classes.flex}>
            {'Hello world'}
          </Typography>
          <Button color="inherit">login</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
