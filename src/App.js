/* ----- React  -----*/
import React, { Component, Fragment } from 'react';

/* ----- MUI  -----*/
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

/* ----- Components  -----*/
import Theme from './Theme';
import Header from './components/Header.js';
import Highlight from './components/Highlight.js';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Releases from './assets/Releases'

import Background from './assets/img/background1.png';

import {BrowserRouter as Router} from 'react-router-dom';



import 'typeface-roboto';




import './App.css';

const styles ={
  wrapper:{
  'backgroundImage':`url('${Background}')`,
  'backgroundSize': 'cover',
  // backgroundColor:'black',

  'display':'flex',
  'flex-direction':'column',
  paddingTop:50
  }
}


class App extends Component {
  render() {
    const {classes}= this.props;
    console.log(Background);
    return (
      <Router>
        <MuiThemeProvider theme={Theme}>
          <Fragment>
            <CssBaseline/>
            <Header />
            <div className={classes.wrapper}>
            <Highlight Releases={Releases}/>
            
            </div>

          </Fragment>
        </MuiThemeProvider>
      </Router>

    );
  }
}

export default withStyles(styles)(App);
