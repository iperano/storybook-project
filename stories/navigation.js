import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';

/* eslint-enable */
import Navigation from '../components/navigation';


const navigationStory = storiesOf('Navigation', module);

const links = [
  {
    id: 1,
    content: <a href="google.com">Google</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="google.com">Google</a>,
    
  },
];


navigationStory.add('simple', () => {
  return <Navigation links={links} />;
});


