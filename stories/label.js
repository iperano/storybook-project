import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Label from '../components/label';

const labelStory = storiesOf('Label', module);

labelStory.add('simple', () => {
  return <Label>ABC!</Label>;
});

labelStory.add('fontSize2', () => {
  return <Label fontSize={2}>ABC!</Label>;
});

labelStory.add('fontSize3', () => {
  return <Label fontSize={3}>ABC!</Label>;
});


