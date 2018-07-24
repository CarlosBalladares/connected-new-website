import React from 'react';
import {withStyles} from '@material-ui/core/styles/';
import {Card, Button, Typography } from  '@material-ui/core/';

import Releases from '../assets/Releases'
import ReleaseCard from  './ReleaseCard';


const styles = theme =>({
  root:{

    'position':'relative',
    
    'padding':24,
    'padding-left':100,
    'padding-right':100,
    'padding-top':50,
    'padding-bottom':50,
    'display':'flex',
    //'z-index':1000,
    'margin-right':50,
    'margin-left':50,
    'flex-direction':'column',
    //'clear': 'both',
    // 'background-color':'gray'
    'top':'-30px',
    // 'bottom':'30px',

    'background-color':'white',
    color:'black',
    

  },
  title:{
    marginBottom:10,
    flex:1,
    display: 'flex',
    'justify-content': 'space-between'

  },
  releaseContainer:{
    display:'flex',
    'justify-content':'space-between',
    'align-items': 'center',
    'flex-wrap':'wrap',

    flex:1
  },
})

function Recent(props){
  const {classes}=props;
  return (
    <Card className = {classes.root}>
      <div className={classes.title}>
        <Typography 
          variant="display1" 
          style={{'text-decoration': 'overline'}}
        >
          New Releases
        </Typography>

        <Button>
          <Typography 
            variant="subheading" 
          >
            View All >
          </Typography>
        </Button>
      
      </div>  
        <div className={classes.releaseContainer}>
        {Releases.map(
          (rel, i)=> 
            <ReleaseCard release={rel} key={i}/>
        )}
        </div>
      </Card>
  );
}

export default withStyles(styles)(Recent);
