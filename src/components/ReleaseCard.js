import React from 'react';
import {Button,Typography, Card } from '@material-ui/core';
import {withStyles} from  '@material-ui/core/styles/';
import Soundcloud from 'material-ui-next-community-icons/icons/soundcloud';


const styles = theme =>({
    root:{
       padding:10,
       maxWidth:500,
       minWidth:'fit-content',
       color:'black',
      //  border: "solid 0px gray",
        transition: "color 0.1s linear",
        transition: "background-color 0.2s linear",

        '&:hover':{
          // 'color': `${theme.palette.primary.main}`
          // 'color': 'black',
          // 'background-color':'rgba(1.0,1.0,1.0,0.3)',
          
        },
      'background-color':'transparent',
      boxShadow: 'none',
      display:'flex',
      'flex-direction':'column'
      // padding:5
    },
    artwork:{
        maxWidth:200,
        maxHeight:200,
        
    },
    text:{
      maxWidth:174,
      
    },
    message:{

    }
})

function ReleaseCard(props){
  const { release } = props;
  const { classes } = props;
  return (
    <Card
      className=    {classes.root}
    >
      <img 
        src=      {release.artwork}
        className=  {classes.artwork}
        
      />
      <div style={{display:'flex'}}>
      <div style={{flex:1}}>
        <Typography
          variant=    "subheading"
          className=  {classes.title}
          children=   {`${release.title}`}
          color=      "inherit"
        style=      {{'font-weight':'100'}}
        />
        <Typography
          variant=    "subheading"
          className=  {classes.title}
          children=   {`${release.artist} `}
          color=      "inherit"
          

        />
        
      </div>
        <Soundcloud />
      </div>
      
      {/* <Typography
        variant=    "body1"
        className=  {classes.text}
        children=   {release.message}
      /> */}
        
      
    </Card>
  );
}

export default withStyles(styles)(ReleaseCard);