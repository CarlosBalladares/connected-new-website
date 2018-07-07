import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
// ----- MUI core -----
import { CssBaseline } from '@material-ui/core';
// ----- MUI colors -----
import { purple, red } from '@material-ui/core/colors';
import Theme from './Theme.js'

import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Fragment>
    );
  }
}

export default App;
