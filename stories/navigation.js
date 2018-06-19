import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import Header from '../components/header';
import Main from '../components/main';

const navigationStory = storiesOf('Navigation', module);

const links = [
  {
    id: 1,
    content: <a href="google.com">Google</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="google.com">Moogle</a>,
  },
];


navigationStory.add('simple', () => {
  return <Navigation links={links} />;
});

navigationStory.add('header & footer', () => {
  return (
    <div>
      <Header>Bok</Header>
      <Navigation links={links} />
      <Main>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Main>
      <Footer>Pozdrav</Footer>
    </div>
  )
})
