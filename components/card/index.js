import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className={styles.card}>
        <img src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Avatar"
          style={{ width: '100%' }}
        />
        <div className={styles.container}>
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    );
  }
}
