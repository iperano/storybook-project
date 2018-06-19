import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Main from '../components/main';

const mainStory = storiesOf('Main', module);

mainStory.add('simple', () => {
  return <Main>text123</Main>;
});
