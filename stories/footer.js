import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import Header from '../components/header';

const footerStory = storiesOf('Footer', module);

const links = [
  {
    id: 1,
    content: <a href="twitter.com">Twitter</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="facebook.com">Facebook</a>,
  },
  {
    id: 3,
    content: <a href="instagram.com">Instakram</a>,
  },
  {
    id: 4,
    content: <a href="linkedin.com">LinkedIn</a>,
  },
];

footerStory.add('simple', () => {
  return <Footer>Pozdrav</Footer>;
});

footerStory.add('final', () => {
  return <Footer links={links} />;
});

footerStory.add('header & footer', () => {
  return (
    <div>
      <Header>Bok</Header>
      <Footer>Pozdrav</Footer>
    </div>
  )
})