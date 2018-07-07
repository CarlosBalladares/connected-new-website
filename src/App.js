/* ----- React  -----*/
import React, { Component, Fragment } from 'react';

/* ----- MUI  -----*/
import { CssBaseline, Paper } from '@material-ui/core';
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
          <p>Hello World</p>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
