import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Roundiconbutton extends React.Component {
  render() {
    return (
      <div className={styles.main}>
          <img src={this.props.imgUrl} className={styles.logo} />
          <input onClick={this.props.onClick} className={styles.roundiconbutton} disabled={this.props.disabled} type='button' value={this.props.text} />
        </div>

    );
  }
}

Roundiconbutton.propTypes = {
  imgUrl: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  imgUrl: PropTypes.string,
};