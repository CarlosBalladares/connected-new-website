import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import LightLogo from '../assets/img/connected-logo.png';
import DarkLogo from '../assets/img/connected-logo-black.png';
const LogoSrc = DarkLogo;



function styles(theme){
  return {
    root:{
        'text-transform':'capitalize',

    },
    logoText:{
        'margin-right':12
    },
  };
}

function Logo(props){
    const {classes}= props;
    return(
        <Button className={classes.root} color="inherit" disableRipple>
            <img
                src={LogoSrc}
                alt="logo"
                width="50"
                height="50"
            />
            <Typography
                color="inherit"
                variant="subheading"
                className={classes.logoText}
            >
                BrandName
            </Typography>
        </Button>
    );
}

Logo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Logo);
