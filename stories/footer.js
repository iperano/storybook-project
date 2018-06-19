import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import Header from '../components/header';

const footerStory = storiesOf('Footer', module);

footerStory.add('simple', () => {
  return <Footer>Pozdrav</Footer>;
});

footerStory.add('header & footer', () => {
  return (
    <div>
      <Header>Bok</Header>
      <Footer>Pozdrav</Footer>
    </div>
  )
})