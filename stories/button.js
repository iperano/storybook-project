import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Button from '../components/button';

const buttonStory = storiesOf('Button', module);

buttonStory.add('just text', () => (
  <Button text={'Press me!'}></Button>
));

buttonStory.add('disabled', () => (
  <Button text="Disabled!" disabled={true}></Button>
));

buttonStory.add('with on click handler', () => (
  <Button text="Press me!" onClick={action('clicked')} ></Button>
));


