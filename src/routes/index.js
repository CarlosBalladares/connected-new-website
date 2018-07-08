import Instagram from 'material-ui-next-community-icons/icons/instagram';
import Facebook from 'material-ui-next-community-icons/icons/facebook';
import Twitter from 'material-ui-next-community-icons/icons/twitter';



const NavigationRoutes = [
  {path: '/releases', name:'Releases'},
  {path: '/artists', name: 'Artists'},
  {path: '/demos', name: 'Demos'},
  {path: '/licensing', name:'Licensing'}
];

const SocialRoutes = [
    {path:'https://www.instagram.com', name:'Instagram', Icon: Instagram},
    {path:'https://www.facebook.com', name:'Facebook', Icon: Facebook},
    {path:'https://www.twitter.com', name:'Twitter', Icon: Twitter},
];


export {
    NavigationRoutes,
    SocialRoutes
};
