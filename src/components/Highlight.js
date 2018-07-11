import React from 'react';
import Parallax from './Parallax/Parallax';
import Background from '../assets/img/background1.png';
import SimpleList from './listDemo';
import {withStyles} from '@material-ui/core/styles/'
import {Card , CardContent, Typography, CardMedia, Button, List, ListItem} from '@material-ui/core';
import SampleArtwork from '../assets/img/shika.png';
import SampleArtworkBlur from '../assets/img/shikablur.png';
import Iframe from 'react-iframe';
import Soundcloud from 'material-ui-next-community-icons/icons/soundcloud';
import Facebook from 'material-ui-next-community-icons/icons/facebook';
//import Youtube from 'material-ui-next-community-icons/icons/youtube';
import Twitter from 'material-ui-next-community-icons/icons/twitter';
import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Discord from '../assets/svg/discord';



function styles(theme){
    return {
      root: {
        'justify-content': 'center',
        'align-items': 'center',
      },
      card:{
        display: 'flex',
        'flex-wrap':'wrap',
        color:'white',
        padding:50,
        'align-items': 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%,rgba(0,0,0,0.5) 100%), url(${SampleArtworkBlur})`,
        backgroundPosition: 'center',
        backgroundColor:'transparent'
        
      },
      artwork:{
        'width':350,
        'height':350,
        'border-radius':2,
        'margin-left':24,
        'margin-right':24
      },
      details:{
        flex:1
      },
      scEmbedContainer:{
        'margin-top':10,
        'margin-bottom':10
      },
      scEmbed:{
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
    };
}

class HighLight extends React.Component{
  constructor(){
    super();
    this.state={
      title: 'Shika',
      artist: 'ARSNL',
      message: 'ARSNL delivers another high quality release.Through connected sounds. Make sure to support him',
      soundcloud: 'imarsnl',
      scEmbed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323954507&color=%239c908c&inverse=true&auto_play=false&show_user=true',
      youtube: 'link',
      twitter:  'arsnl_ftw',
      instagram: 'imarsnl',
      artwork: SampleArtwork
    } 
  }

  render(){
    const {classes}= this.props;

    return (
      <Parallax  image={Background} className ={classes.root}>
        <Card className={classes.card}>
          <CardContent className={classes.details}>
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
            
            <div className={classes.scEmbedContainer} >

              <Iframe
                url={this.state.scEmbed}
                width=""
                height="20dp"
                position="relative"
                styles={classes.scEmbed}
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
                <Button color="inherit" className={classes.socialbutton}>
                  <Soundcloud/>
                    <Typography color="inherit">
                      {this.state.soundcloud}
                    </Typography>
                </Button>
              </ListItem>

              <ListItem disableGutters>
                <Button color="inherit" className={classes.socialbutton}>
                  <Twitter/>
                    <Typography color="inherit">
                      {this.state.twitter}
                    </Typography>
                </Button>
              </ListItem>

              <ListItem disableGutters>
                <Button color="inherit" className={classes.socialbutton}>
                  <Instagram/>
                    <Typography color="inherit">
                      {this.state.instagram}
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
          <CardMedia image={this.state.artwork} className={classes.artwork}/>
        </Card>

      </Parallax> 
    );
  }
}

export default withStyles(styles)(HighLight);
