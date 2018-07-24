import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import { Button, Welcome } from '@storybook/react/demo';

import Logo from '../components/Logo';
import SimpleList from '../components/listDemo';

import Header from '../components/Header'
import Highlight from '../components/Highlight'
import ReleaseCard from '../components/ReleaseCard'

import Releases from '../assets/Releases'

const sampleRelease= Releases[0];


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
storiesOf('Navigation', module)
  .add('Logo', ()=><Logo />)
  .add('SL', ()=><SimpleList />)
  .addDecorator(withKnobs);

storiesOf('Navbar', module)
  .add('navbar', ()=><div style={{backgroundColor:'black'}}><Header/></div>);


storiesOf('Content', module)
  .add('Highlight', ()=><Highlight/>)
  .add('ReleaseCard', ()=><ReleaseCard release={sampleRelease} />);
