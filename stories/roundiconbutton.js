import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Roundiconbutton from '../components/roundiconbutton';

const roundiconbuttonStory = storiesOf('Roundiconbutton', module);

roundiconbuttonStory.add('simple', () => (
  <Roundiconbutton
     imgUrl="http://icons.iconarchive.com/icons/iconsmind/outline/16/URL-Window-icon.png"
     text="Round icon button "
  ></Roundiconbutton>
));