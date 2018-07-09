import React from 'react';
import PropTypes from 'prop-types';
import {NavigationRoutes , SocialRoutes}from '../routes';

import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import LightLogo from '../assets/img/connected-logo.png';
import DarkLogo from '../assets/img/connected-logo-black.png';

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
        flex:1
    },
    navLink:{
        margin:10,
    },
    socialLinks:{
        display: 'flex',
        'margin-right':28,
    },
    flex:{
      margin:10,
    },
    menuButton: {

    },
    logo:{
        //'min-width': 'min-content',
        'text-transform':'capitalize',
    },

    mobileMenuRoot:{
      display: 'flex',
      flex:1
    },
    logoText:{
        'margin-right':12
    },
    logoMobile:{
        flex:1
    }
  });
}

function Logo(props){
    const {classes}= props;
    return(
        <Button className={classes.logo} color="inherit">
            <img
                src={LightLogo}
                alt="logo"
                width="50"
                height="50"
            />
            <Typography
                color="inherit"
                variant="subheading"
                className={classes.logoText}
            >
                Connected
            </Typography>
        </Button>
    );
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

function MobileMenu(props){
    const {classes}=props;
    return(
        <div className={classes.mobileMenuRoot}>
            <IconButton
                onClick={props.toggleDrawer}
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon/>
            </IconButton>
            <Button className={classes.mobileLogo} color="inherit">
              <img
                src={LightLogo}
                alt="logo"
                width="30"
                height="30"
              />
            </Button>

            <Drawer
            anchor="left"
            open={props.openDrawer}
            onClose={props.toggleDrawer}
            >
             <Typography
              color="inherit"
              variant="title"
              className={classes.flex}
             >
              hello drawer world s
            </Typography>

            <NavLinks {...props} />

          </Drawer>

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
    console.log('drawer opened');
  }

  render(){
      const { classes }  = this.props;

      return (
        <div className={classes.root}>
          <AppBar position="static" color="primary">
            <Toolbar>
              {/*----- Menu Items -----*/}
             <Hidden smDown>
                <Logo {...this.props} />
                <NavLinks {...this.props} />
                <SocialLinks {...this.props} />
              </Hidden>
              {/*<Button color="inherit">login</Button>*/}
              <Hidden mdUp>
              <IconButton
                  onClick={this.toggleDrawer}
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon/>
              </IconButton>
              <Button className={classes.logoMobile} color="inherit">
                <img
                  src={LightLogo}
                  alt="logo"
                  width="50"
                  height="50"
                />
              </Button>

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
                hello drawer world s
              </Typography>

              <NavLinks {...this.props} />
              <SocialLinks {...this.props} />
            </Drawer>
              </Hidden>

              {/*----- Drawer -----*/}
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
