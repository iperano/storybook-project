import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Roundiconbutton from '../components/roundiconbutton';

const roundiconbuttonStory = storiesOf('Roundiconbutton', module);

roundiconbuttonStory.add('simple', () => (
  <Roundiconbutton
     imgUrl="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png"
     text="Round icon button "
  ></Roundiconbutton>
));