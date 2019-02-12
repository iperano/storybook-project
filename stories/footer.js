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
    content: <a href="http://twitter.com"><img border="0" alt="Twitter" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/43-twitter-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="http://facebook.com"><img border="0" alt="Facebook" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_black-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 3,
    content: <a href="http://instagram.com"><img border="0" alt="Instagram" src="https://cdn4.iconfinder.com/data/icons/picons-social/57/38-instagram-3-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 4,
    content: <a href="http://linkedin.com"><img border="0" alt="LinkedIn" src="https://cdn3.iconfinder.com/data/icons/picons-social/57/51-linkedin-512.png" width="30" height="30"/></a>,
    active: true,
  },
  {
    id: 4,
    content: <a href="http://github.com"><img border="0" alt="Github" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_black-512.png" width="30" height="30"/></a>,
    active: true,
  },
];


footerStory.add('final', () => {
  return <Footer links={links} text="Duff Brewery" />;
});

footerStory.add('header & footer', () => {
  return (
    <div>
      <Header
        imgUrl="https://seeklogo.com/images/D/duff-beer-logo-3AA4218F1D-seeklogo.com.png"
        class="" 
        text="Duff Brewery">
      </Header>;
      <Main >
        
      </Main>
      <Footer links={links} text="Duff Brewery" />
    </div>
  )
})