import React from 'react';
import Parallax from './Parallax/Parallax';
import Background from '../assets/img/background1.png';
import SimpleList from './listDemo';
import {withStyles} from '@material-ui/core/styles/'
import {
  Card, 
  CardContent, 
  Typography, 
  CardMedia, 
  Button, 
  List, 
  ListItem,
  Hidden
} from '@material-ui/core';
import SampleArtwork from '../assets/img/fd.png';
import ShikaBlur from '../assets/img/shikablur.png';
import FDBlur from '../assets/img/FDBlur2.png';
import Iframe from 'react-iframe';
import Soundcloud from 'material-ui-next-community-icons/icons/soundcloud';
import Facebook from 'material-ui-next-community-icons/icons/facebook';
//import Youtube from 'material-ui-next-community-icons/icons/youtube';
import Twitter from 'material-ui-next-community-icons/icons/twitter';
import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Discord from '../assets/svg/discord';
import Image from 'material-ui-image';

const SampleArtworkBlur = (false)?ShikaBlur : FDBlur;

function styles(theme){
    return {
      parallax:{
        'justify-content': 'left',
        'align-items' : 'center',
        'padding-top':50,
        //'padding-bottom':50,
      },
      root: {
        display: 'flex',
       'flex-direction': 'row',
        'flex-wrap':'wrap',
       'justify-content':'center', 
       //'backgroundImage': `linear-gradient(to bottom, rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.5) 100%), url(${FDBlur})`,
       // backgroundPosition: 'center',
        //'backgroundSize': 'cover',
        //'width':'100%'
      },
      card:{
        width:'100%',
        color:'white',
        padding:100,
        'align-items': 'center',
        backgroundPosition: 'center',
        backgroundColor:'transparent',
        'backgroundSize': 'cover',
        boxShadow:'none',
        flex:1,
        'min-width':300
      },
      artwork:{
        'border-radius':2,
        'margin-left':24,
        'margin-right':24,
        'min-width':300,
        'display':'flex',
        'flex-direction':'column',
        'justify-content':'center',
        flex:0,
        '& img':{
          width:'100%',
        
        }
      },
      details:{
      },
      scEmbedContainer:{
        'margin-top':10,
        'margin-bottom':10
      },
      scEmbedd:{
        'display':'flex',
      },
      socialbutton:{
        'text-transform':'lowercase',
        '&:hover':{
          'backgroundColor':'transparent'
        },

        '& *':{
          'margin-right':5
        },
        flex:1,
        'min-width': 'fit-content'
      },
      socialbuttons:{
        'display':'flex',
        'row':'wrap',
        'padding': 0,
        'justify-content': 'left',
        'flex-wrap':'wrap'
      },
       
    };
}

class HighLight extends React.Component{
  constructor(){
    super();
    this.state={
      title: 'Falling Down',
      artist: 'Emplexx',
      message: 'Emplexx delivers high quality 8-bar complextro straight out of 2010.',
      soundcloud: 'emplexx',
      scEmbed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323954507&color=%239c908c&inverse=true&auto_play=false&show_user=true',
      youtube: '',
      twitter:  'emplexx',
      instagram: 'emplexxofficial',
      artwork: SampleArtwork
    } 
  }

  render(){
    const {classes}= this.props;

    return (
      <Parallax image={FDBlur} className={classes.parallax}>
      <div className={classes.root}>
        <div className={classes.card}>
            <Typography 
              color="inherit" 
              variant="display1"
              gutterBottom
            >
              Latest Release 
            </Typography>
            <Typography 
              color="inherit" 
              variant="display2"
              gutterBottom  
            >
             {`${this.state.artist} - ${this.state.title}`}
            </Typography>
            <Typography color="inherit" gutterBottom>
              {this.state.message}
            </Typography>
            <br />

            <div className={classes.scEmbedContainer} >

              <Iframe
                url={this.state.scEmbed}
                width=""
                height="20dp"
                position="relative"
                display="inline"
                margin="30"
                marginwidth="100"
              />
            </div>
            
            <Typography variant="title" color="inherit" gutterBottom>
              {'Social media:'}
            </Typography>

            <div disablePadding className={classes.socialbuttons}> 
                <Button color="inherit" className={classes.socialbutton}>
                  <Soundcloud/>
                    <Typography color="inherit">
                      {this.state.soundcloud}
                    </Typography>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Twitter/>
                    <Typography color="inherit">
                      {this.state.twitter}
                    </Typography>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Instagram/>
                    <Typography color="inherit">
                      {this.state.instagram}
                    </Typography>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Discord/>
                    <Typography color="inherit">
                      {'Discord'}
                    </Typography>
                </Button>

           </div>

        </div>
        <div className={classes.artwork}>
          <img src={this.state.artwork}/>
        </div>
        </div>
      </Parallax> 
    );
  }
}

export default withStyles(styles)(HighLight);
