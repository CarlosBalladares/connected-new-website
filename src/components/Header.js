import React, { Fragment}from 'react';
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
  Hidden,
  SwipeableDrawer,
  List,
  ListItem,
  Divider
} from '@material-ui/core'

const LogoSrc = LightLogo;



function styles(theme){
  const {palette}=theme;
  console.log(palette.primary.main)
  return({
    root:{
        display: 'flex',
        'min-width': 'min-content',
        'justify-content': 'flex-start',
        'font-weight': 'bold',
        backgroundColor: 'transparent',
        'padding-top':10,

    },
    navLinks:{
        display:'flex',
        flex:1,
        padding:0
    },
    navLink:{
        'text-transform':'capitalize',
        'color':'white',
        height: 'inherit'
    },
    socialLinks:{
        display: 'flex',
        'margin-right':28,
        'color':'white',
    },
    flex:{
      margin:10,
    },
    menuButton: {
      position:'absolute',
      'z-index':1103,
      'color':'white',
    },
    logo:{
        //'min-width': 'min-content',
        'color':'white',
        'text-transform':'capitalize',
        '&:hover': {
        //you want this to be the same as the backgroundColor above
          backgroundColor:'transparent'
        }
    },

    mobileMenuRoot:{
      display: 'flex',
      flex:1
    },
    logoText:{
        'margin-right':12
    },
    logoMobile:{
        flex:1,

        '&:hover': {
        //you want this to be the same as the backgroundColor above
          backgroundColor : 'transparent',
        }
    }
  });
}

function Logo(props){
    const {classes}= props;
    return(
        <Button className={classes.logo} color="inherit" disableRipple >
            <img
                src={LogoSrc}
                alt="logo"
                width="50"
                height="50"
            />
            <Typography
                color="inherit"
                variant="subheading"
                className={classes.logoText}
            >
                BrandName
            </Typography>
        </Button>
    );
}

function NavLinks(props){

     const {classes} =props;
     const routesNavBar = NavigationRoutes.map((route, index)=>(
        <Fragment>
        <Button

          className={classes.navLink}
        >
        <Typography
          variant="subheading"
          color="inherit"
          aria-label="Menu"
          key={index}

        >
          {route.name}
        </Typography>
        </Button>
        <Divider/>
        </Fragment>

      ));

    return(
        <List className={classes.navLinks}>
            {routesNavBar}
        </List>
    );
}

function SocialLinks(props){
    const {classes}=props;
    const routesSocial=SocialRoutes.map((route, index)=>(
        <IconButton  color="inherit" key={index}>
            <route.Icon/>
        </IconButton>
    ));

    return (
        <div className={classes.socialLinks}>
            {routesSocial}
        </div>
    );
}

function DrawerLinks(props){
  const { classes }  = props;
  return(
    <SwipeableDrawer
      anchor="left"
      open={props.openDrawer}
      onClose={props.toggleDrawer}
      onOpen={props.toggleDrawer}

      disableDiscovery
    >
    <List style={{'padding':10}} >
      {NavigationRoutes.map((route, i)=>(
          <ListItem
            button
            disableRipple
          >
            <route.Icon style={{'margin-right':10}}/>
            <Typography >
            {route.name}
            </Typography>
          </ListItem>
      ))}
      <Divider component={()=>'ff'}></Divider>

      {SocialRoutes.map((route, i)=>(
          <ListItem
            button
            style={{'margin-right':10}}
            disableRipple

          >
            <route.Icon style={{'margin-right':10}}/>
            <Typography color="inherit">
            {route.name}
            </Typography>
          </ListItem>
      ))}
    </List>
    </SwipeableDrawer>
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
        <Fragment>
        <div>
          <AppBar position="absolute" color="black" className={classes.root} elevation={0}>
            <Toolbar >
              {/*----- Desktop Items -----*/}
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
                    aria-label="Menu"
                    variant="text"
                  >
                    <MenuIcon/>
                </IconButton>
                <Button
                  className={classes.logoMobile}
                  color="inherit"
                  disableRipple
                >
                  <img
                    src={LogoSrc}
                    alt="logo"
                    width="50"
                    height="50"
                  />
                </Button>


              </Hidden>

              {/*----- Drawer -----*/}
           </Toolbar>
          </AppBar>

        <DrawerLinks
          toggleDrawer={this.toggleDrawer}
          openDrawer={this.state.openDrawer}
          {...this.props}
        />
        </div>

        </Fragment>
      );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
