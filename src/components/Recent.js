import React from 'react';
import {Typography, Card} from  '@material-ui/core/';
import {withStyles} from '@material-ui/core/styles/';

import FDBlur from '../assets/img/FDBlur2.png';


const styles = theme =>({
  root:{
    'padding':24,
    'padding-left':100,
    'padding-right':100,
    'display':'flex',
    'z-index':1000,
    'margin-right':100
  },
  text:{
   // 'text-decoration': 'overline',
    
  }
})

function Recent(props){
  const {classes}=props;
  return (
    <Card className = {classes.root}>
      <Typography 
        variant="display1" 
        className={classes.text}
        bottomGutter
      >
        Recent
      </Typography>
      <img src={FDBlur} />
       
      </Card>
  );
}

export default withStyles(styles)(Recent);
