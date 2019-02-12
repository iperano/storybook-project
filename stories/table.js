import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Table from '../components/table';

const tableStory = storiesOf('Table', module);

const header = [
  {
    name: '#',
  },
  {
    name: 'Naziv',
  },
  {
    name: 'Opis',
  },
  {
    name: 'Količina',
  },
];

const data = [
  {
    id: 1,
    name: 'Pivo 1',
    desc: 'opis prvog piva',
    //imgUrl: 'http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png',
    number: 1,
  },
  {
    id: 2,
    name: 'Pivo 2',
    desc: 'opis drugog piva',
    //imgUrl: 'http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png',
    number: 1,
  },
];

tableStory.add('with content', () => (
  <Table 
    headers={header} 
    values={data} 
    icon="https://cdn4.iconfinder.com/data/icons/finance-banking-2/32/star2-512.png"
    onClick={renderStarRating}> 
  </Table>
));

function renderStarRating(event) {
  console.log(event.target);
}