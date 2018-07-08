import React from 'react';
import PropTypes from 'prop-types';
import {NavigationRoutes , SocialRoutes}from '../routes';

import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import DeleteIcon from '@material-ui/icons/Delete'
import AccountIcon from 'material-ui-next-community-icons/icons/account';
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
        display: 'flex',
        'min-width': 'min-content',
        'justify-content': 'flex-start',
        'font-weight': 'bold',
    },
    navLinks:{
        display:'flex',
        flex:2
    },
    navLink:{
        margin:10,
    },
    socialLinks:{
        display: 'flex'
    },
    flex:{
      margin:10,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  });
}

function NavLinks(props){
     const {classes} =props;
     const routesNavBar = NavigationRoutes.map((route, index)=>(
        <Typography
          variant="subheading"
          color="inherit"
          aria-label="Menu"
          key={index}
          className={classes.navLink}
        >
          {route.name}
        </Typography>
      ));

    return(
        <div className={classes.navLinks}>
            {routesNavBar}
        </div>
    );
}

function SocialLinks(props){
    const {classes}=props;
    const routesSocial=SocialRoutes.map((route, index)=>(
        <IconButton color="inherit" key={index}>
            <route.Icon/>
        </IconButton>
    ));

    return (
        <div className={classes.socialLinks}>
            {routesSocial} 
        </div>
    );
}


class Header extends React.Component{
  constructor(){
      super();
      this.state={
        openDrawer: false
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

      return (
        <div className={classes.root}>
          <AppBar position="static" color="transparent">
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
              <NavLinks {...this.props}/>
              <SocialLinks {...this.props}/>
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
