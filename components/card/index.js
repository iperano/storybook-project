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
          <h4><b>{this.props.name}</b></h4>
          <p>{this.props.job}</p>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
};
