import React from 'react';
import Parallax from './Parallax/Parallax';
import Background from '../assets/img/background1.png';
import SimpleList from './listDemo';
import {withStyles} from '@material-ui/core/styles/'
import {Card , CardContent, Typography} from '@material-ui/core'



function styles(theme){
    return {
      root: {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
      },
      highLight:{
        'padding-top': 24,
      },
    };
}

function HighLight(props){
  const {classes}= props;
  return (
    <Parallax  image={Background} className ={classes.root}>
      <Card>
        <CardContent>
          <Typography>
            Hello world
          </Typography>
        </CardContent>
      </Card>

    </Parallax> 
  );
}

export default withStyles(styles)(HighLight);
