import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Menu from '../components/menu';

const menuStory = storiesOf('Menu', module);

const links = [
  {
    id: 1,
    content: <a href="http://google.com">Google</a>,
    active: true,
    
  },
  {
    id: 2,
    content: <a href="google.com">Google</a>,
  },
];

menuStory.add('simple', () => {
  return <Menu links={links} />;
});
