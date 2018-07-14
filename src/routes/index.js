import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Facebook from 'material-ui-next-community-icons/icons/facebook';
import Twitter from 'material-ui-next-community-icons/icons/twitter';
import Account from 'material-ui-next-community-icons/icons/account';
import MusicCircle from 'material-ui-next-community-icons/icons/music-circle';
import Email from 'material-ui-next-community-icons/icons/email';
import PageFirst from 'material-ui-next-community-icons/icons/page-first';
import Discord from '../assets/svg/discord';


// Actual routed components will be added.

const NavigationRoutes = [
  {path: '/releases', name:'Releases', Icon:MusicCircle},
//   {path: '/artists', name: 'Artists', Icon:Account},
//   {path: '/demos', name: 'Demos', Icon:Email},
//   {path: '/licensing', name:'Licensing', Icon:PageFirst}
];

const SocialRoutes = [
    {path:'https://www.instagram.com/connected_sounds/', name:'Instagram', Icon: Instagram},
    {path:'https://www.discord.gg', name:'Discord', Icon: Discord},
    {path:'https://twitter.com/Connected_Sound', name:'Twitter', Icon: Twitter},
];


export {
    NavigationRoutes,
    SocialRoutes
};
