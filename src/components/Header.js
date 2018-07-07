import React from 'react';
import PropTypes from 'prop-types';
import Routes from '../routes';

import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  Hidden
} from '@material-ui/core'


function styles(theme){
  return({
    root:{
      flexGrow: 1
    },
    flex:{
      flex: 1,
      margin: 10
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });
}

class Header extends React.Component{
  constructor(){
      super();
      this.state={
        openDrawer:false
      }
      this.toggleDrawer=this.toggleDrawer.bind(this);
  }

  toggleDrawer(e){
    const {openDrawer} = this.state;
    this.setState({
        openDrawer: !openDrawer
    });
  }

  render(){
      const { classes }  = this.props;
      const routesNavBar = Routes.map((route, index)=>(
        <Typography 
          variant="title"
          color="inherit"
          aria-label="Menu"
          className={classes.flex} 
        >
          {route.name}
        </Typography>
      ));

      return (
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              {/*----- Menu Items -----*/}
              <IconButton 
                onClick={this.toggleDrawer} 
                className={classes.menuButton} 
                color="inherit" 
                aria-label="Menu"
              >
                <MenuIcon/>
              </IconButton>
              {/*<Typography variant="title"  color="inherit" className={classes.flex}>
                {'Hello world'}
              </Typography>*/}
              {routesNavBar}
              <Button color="inherit">login</Button>
              
              {/*----- Drawer -----*/}
              <Drawer 
                anchor="left"  
                open={this.state.openDrawer}
                onClose={this.toggleDrawer}
              >
                <Typography 
                  color="inherit"
                  variant="title" 
                  className={classes.flex}
                >
                  hello drawer world
                </Typography>
              </Drawer>
            </Toolbar>
          </AppBar>
        </div>
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
