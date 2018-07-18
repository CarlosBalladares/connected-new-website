import React from 'react';
import {Typography, Card} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles/';

const styles ={
  root:{
    margin:100
  },
  typo:{
    variant: 'display4'
  }
}

class Test extends React.Component{
  constructor(){
    super();
  }

  render(){
    const {classes}= this.props;
    const {muiTheme}=this.props;
    console.log(this.props);
    return (
      <Card className={classes.root}>
        <Typography className={classes.typo}>Hello world 1233456789</Typography>
      </Card>
    );
  }
}

export default withStyles(styles)(Test);
