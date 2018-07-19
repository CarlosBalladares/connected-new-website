import React from 'react';
import {Typography} from  '@material-ui/core/';
import {withStyles} from '@material-ui/core/styles/';

const styles = theme =>({
  root:{
    'padding':24,
    'padding-left':100,
    'padding-right':100,
    'display':'flex'
  },
  text:{
   // 'text-decoration': 'overline',
  }
})

function Recent(props){
  const {classes}=props;
  return (
    <div className = {classes.root}>
      <Typography variant="display1" className={classes.text}>Recent</Typography>
    </div>
  );
}

export default withStyles(styles)(Recent);
