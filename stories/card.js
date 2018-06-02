import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Card from '../components/card';

const labelStory = storiesOf('Card', module);

labelStory.add('simple', () => {
  return <Card />;
});

