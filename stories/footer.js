import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

const footerStory = storiesOf('Footer', module);

const links = [
  {
    id: 1,
    content: <a href="http://twitter.com">Twitter</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="http://facebook.com">Facebook</a>,
    active: true,
  },
  {
    id: 3,
    content: <a href="http://instagram.com">Instagram</a>,
    active: true,
  },
  {
    id: 4,
    content: <a href="http://linkedin.com">LinkedIn</a>,
    active: true,
  },
];

footerStory.add('simple', () => {
  return <Footer>Pozdrav</Footer>;
});

footerStory.add('final', () => {
  return <Footer links={links} text="Duff Brewery" />;
});

footerStory.add('header & footer', () => {
  return (
    <div>
      <Header>Bok</Header>
      <Main></Main>
      <Footer links={links} text="Duff Brewery" />
    </div>
  )
})