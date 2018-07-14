import React, { Fragment } from 'react';
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
import FDBlur from '../assets/img/fdblur.png';
import EchoBlur from '../assets/img/EchoBlur.jpg';

import Iframe from 'react-iframe';
import Soundcloud from 'material-ui-next-community-icons/icons/soundcloud';
import Facebook from 'material-ui-next-community-icons/icons/facebook';
//import Youtube from 'material-ui-next-community-icons/icons/youtube';
import Twitter from 'material-ui-next-community-icons/icons/twitter';
import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Discord from '../assets/svg/discord';
import {Link,Redirect} from 'react-router-dom';

import injectSheet from 'react-jss'


const SampleArtworkBlur = (false)?ShikaBlur : FDBlur;




const styles= {  
      root: {
        'justify-content': 'center',
        'align-items': 'center',
        display:'flex',
        'flex-direction': 'column',
        paddingTop:100
      },
      card:{
        display: 'flex',
        'flex-wrap':'wrap',
        color:'white',
        padding:100,
        backgroundPosition: 'center',
        backgroundColor:'transparent',
       'backgroundImage': `linear-gradient(to bottom, rgba(0,0,0,0.9) 0%,rgba(0,0,0,0.3) 100%), url(${EchoBlur})`,
      'backgroundSize': 'cover',
        
        boxShadow:'none',
        margin:50
      },
      artwork:{
        'width':350,
        'height':350,
        'border-radius':2,
        'margin-left':24,
        'margin-right':24,
      },
      details:{
        flex:1,
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
        }
      },
      socialbuttons:{
        'display':'flex',
        'flexDirection':'row',
        'padding': 0,
        'justify-content':'left'
      }
      
    }


class HighLight extends React.Component{

  constructor(){
    super();
/**    this.props={
      title: 'Falling Down',
      artist: 'Emplexx',
      message: 'Emplexx delivers high quality 8-bar complextro straight out of 2010.',
      soundcloud: 'emplexx',
      scEmbed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323954507&color=%239c908c&inverse=true&auto_play=false&show_user=true',
      youtube: '',
      twitter:  'emplexx',
      instagram: 'emplexxofficial',
      artwork: SampleArtwork
    } **/

    this.handleSoundcloudLink = this.handleSoundcloudLink.bind(this);
  }

  handleSoundcloudLink(e){
      ///e.preventDefault();
      console.dir(e.target);
    
  }

  render(){
    const {classes}= this.props;
    const {Releases}=this.props;
    const style ={
      backgroundImage:`${this.props.artwork}`,
      backgroundSize: 'cover',

    }



    return (
      <Fragment>
      {Releases.map((Release, index) =>
      <div style={{position:'relative'}}>
        <Card className={classes.card} classes={{root : classes.card }} key={index} style={style}>
          <CardContent className={classes.details}>

            {Release.latest?
            <Typography 
              color="inherit" 
              variant="display1"
              gutterBottom
            >
              Latest Release 
            </Typography>
            :""}
            <Typography 
              color="inherit" 
              variant="display2"
              gutterBottom  
            >
             {`${Release.artist} - ${Release.title}`}
            </Typography>
            <Typography color="inherit" gutterBottom>
              {Release.message}
            </Typography>
            
            <div className={classes.scEmbedContainer} >

              <Iframe
                url={Release.scEmbed}
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

            <List disablePadding className={classes.socialbuttons}> 
              <ListItem disableGutters>
                <Button  color="inherit" href={`https://www.soundcloud.com/${Release.soundcloud}`}  className={classes.socialbutton} onClick={this.handleSoundcloudLink}>
                  <Soundcloud type="submit" name={`${Release.soundcloud}`} />
                    <Typography color="inherit" name={`${Release.soundcloud}`} >
                      {Release.soundcloud}
                    </Typography>
                </Button>
              </ListItem>

              <ListItem disableGutters>
                <Button color="inherit" className={classes.socialbutton} href={`https://www.twitter.com/${Release.twitter}`}>
                  <Twitter/>
                    <Typography color="inherit">
                      {Release.twitter}
                    </Typography>
                </Button>
              </ListItem>

              <ListItem disableGutters>
                <Button color="inherit" className={classes.socialbutton}>
                  <Instagram/>
                    <Typography color="inherit">
                      {Release.instagram}
                    </Typography>
                </Button>
              </ListItem>

             <ListItem disableGutters>
                <Button color="inherit" className={classes.socialbutton}>
                  <Discord/>
                    <Typography color="inherit">
                      {'Discord'}
                    </Typography>
                </Button>
              </ListItem>

           </List>
          </CardContent>
          <Hidden mdDown>
            <CardMedia image={Release.artwork} className={classes.artwork}/>
          </Hidden>
        </Card>
      </div >

      )}
    </Fragment>

    );
  }
}

export default withStyles(styles)(HighLight);
