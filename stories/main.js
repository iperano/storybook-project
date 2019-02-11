import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Main from '../components/main';
import Card from '../components/card';
import beers from './beers.json';


const mainStory = storiesOf('Main', module);

mainStory.add('simple', () => {
  return <Main>text123</Main>;
});

mainStory.add('all beers', () => {
  const cards = beers.map(beer => <Card
        id={beer.id}
        imgUrl={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        description={beer.description}
        onClickFavorites={renderStarRating}
        onClickDetails={renderStarRating}
        onClickCart={renderStarRating}
        iconFavorites="https://cdn4.iconfinder.com/data/icons/finance-banking-2/32/star2-512.png"
        iconCart="https://cdn4.iconfinder.com/data/icons/single-width-stroke/24/oui-icons-21-512.png"
        iconDetails="https://cdn1.iconfinder.com/data/icons/material-core/20/info-outline-512.png"
        ></Card>);
  return <div className="row">{cards}</div>;
});

function renderStarRating(event) {
  console.log(document.getElementsByName('divMain'));
}
