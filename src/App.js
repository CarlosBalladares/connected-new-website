/* ----- React  -----*/
import React, { Component, Fragment } from 'react';

/* ----- MUI  -----*/
import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

/* ----- Components  -----*/
import Theme from './Theme';
import Header from './components/Header.js';
import Highlight from './components/Highlight.js';
import Recent from './components/Recent';

import Test from './components/Test';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import 'typeface-roboto';


import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Fragment>
          <CssBaseline/>
          {/*<Test theme={Theme} />*/}
          <Header />
          <div style={{display: 'flex', 'flex-direction':'column',  'background-color':'#232935',
}}>
            <Highlight/>
            <Recent />
            {/* <Highlight/> */}
          </div>
        </Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
