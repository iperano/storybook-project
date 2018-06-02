import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return <div>Card</div>;
  }
}
