/* ----- React  -----*/
import React, { Component, Fragment } from 'react';

/* ----- MUI  -----*/
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

/* ----- Components  -----*/
//import ButtonsDemo from './components/ButtonsDemo';
import Theme from './Theme';
import Header from './components/Header.js';


import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Fragment>
          <CssBaseline/>
          <Header />
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;