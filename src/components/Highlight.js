import React from 'react';
import {Parallax} from 'react-parallax';
import BackgroundImage from '../assets/img/clouds.gif';
import {withStyles} from '@material-ui/core/styles/'
import {
  Typography, 
  Button, 
  Hidden
} from '@material-ui/core';
import SampleArtwork from '../assets/img/fd.png';
import ShikaBlur from '../assets/img/shikablur.png';
import FDBlur from '../assets/img/FDBlur2.png';
import Iframe from 'react-iframe';
import Soundcloud from 'material-ui-next-community-icons/icons/soundcloud';
// import Facebook from 'material-ui-next-community-icons/icons/facebook';
//import Youtube from 'material-ui-next-community-icons/icons/youtube';
import Twitter from 'material-ui-next-community-icons/icons/twitter';
import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Discord from '../assets/svg/discord';
import Image from 'material-ui-image';

const SampleArtworkBlur = (false)?ShikaBlur : FDBlur;

function styles(theme){
    return {
      parallax:{
        'justify-content': 'space-evenly',
        'align-items' : 'center',
        //'padding-bottom':50,
        //'z-index':1000
        
      },
      root: {
        display: 'flex',
        'flex-direction': 'row',
        'flex-wrap':'wrap',
        'justify-content':'center',
        'padding':100,
       //'backgroundImage': `linear-gradient(to bottom, rgba(0,0,0,0.0) 0%,rgba(0,0,0,0.5) 100%), url(${FDBlur})`,
       // backgroundPosition: 'center',
        //'backgroundSize': 'cover',
        //'width':'100%'
        
      },
      card:{
        width:'100%',
        color:'white',
        'align-items': 'center',
        backgroundPosition: 'center',
        backgroundColor:'transparent',
        'backgroundSize': 'cover',
        boxShadow:'none',
        flex:2,
        'min-width':300,
        'margin-left':50,
        'margin-right':50,
        'margin-top':25,

      },
      artwork:{
        'border-radius':2,
        'margin-left':50,
        'margin-right':50,
        'min-width':300,
        'max-width':350,
        'margin-top':25,

       'display':'flex',
        'flex-direction':'column',
        'justify-content':'center',
        flex:1,
        //'margin-right':100,
        //'margin-left':'auto',
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
    //this.parallax = React.createRef();

    this.state={
      trackData:{
        title: 'Falling Down',
        artist: 'Emplexx',
        message: 'Emplexx delivers high quality 8-bar complextro straight out of 2010.',
        soundcloud: 'emplexx',
        scEmbed: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/323954507&color=%239c908c&inverse=true&auto_play=false&show_user=true',
        youtube: '',
        twitter:  'emplexx',
        instagram: 'emplexxofficial',
        artwork: SampleArtwork
      },
      screenDimensions:{
        width:0,
        height:0
      }
    } 

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  

  updateWindowDimensions() {
    const {trackData}=this.state;
    this.setState({
      trackData: {...trackData},
      screenDimensions:{
        width: window.innerWidth, 
        height: window.innerHeight
      }
    });
    // Move parallax background to top when resizing and parallax is
    // disabled. Not done by default and BGimage is placed wherever
    // the position was when parallax was disabled
    if(!this.parallaxEnabled()){
      this.parallax.img.style.WebkitTransform = `translate3d(-50%, 0px, 0)`;
      this.parallax.img.style.transform = `translate3d(-50%, 0px, 0)`;
    }
  }

  parallaxEnabled(){
    return this.state.screenDimensions.width>750 
      && this.state.screenDimensions.height>750;
  }
  

  render(){
    const {classes}= this.props;
    const {trackData}=this.state;
    const {screenDimensions}= this.state;
    return (
      <Parallax 
        bgImage={BackgroundImage} 
        strength={this.parallaxEnabled()? screenDimensions.height*0.6:0} 
        className={classes.parallax} 
        disabled={!this.parallaxEnabled()}
        bgClassName={'image123'}
        ref={(node) => { this.parallax = node; }}
      >
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
             {`${trackData.artist} - ${trackData.title}`}
            </Typography>
            <Typography color="inherit" gutterBottom>
              {trackData.message}
            </Typography>
            <br />

            <div className={classes.scEmbedContainer} >

              <Iframe
                url={trackData.scEmbed}
                width=""
                height="20dp"
                position="relative"
                display="inline"
                margin="30"
                marginwidth="100"
              />
            </div>
            
            <Typography variant="title" color="inherit" gutterBottom>
              {`Social media:`}
            </Typography>

            <div disablePadding className={classes.socialbuttons}> 
                <Button color="inherit" className={classes.socialbutton}>
                  <Soundcloud/>
                  <Hidden smDown>
                    <Typography color="inherit">
                      {trackData.soundcloud}
                    </Typography>
                  </Hidden>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Twitter/>
                  <Hidden smDown>
                    <Typography color="inherit">
                      {trackData.twitter}
                    </Typography>
                  </Hidden>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Instagram/>
                  <Hidden smDown>
                    <Typography color="inherit">
                      {trackData.instagram}
                    </Typography>
                  </Hidden>
                </Button>

                <Button color="inherit" className={classes.socialbutton}>
                  <Discord/>
                  <Hidden smDown>
                    <Typography color="inherit">
                      {'Discord'}
                    </Typography>
                  </Hidden>
                </Button>
            </div>
          </div>

          <div className={classes.artwork}>
            <Image color="black" src={trackData.artwork} style={{display:'inline'}}/>
          </div>
        </div>
      </Parallax> 
    );
  }
}

export default withStyles(styles)(HighLight);
