import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer} >
        <div className={styles.footerText} >
          {this.props.text}
        </div>
        <div className={styles.footerLinks}>
          {
          <ul className={styles.footerLinks}>
            {
              this.props.links.map(link => (<li key={link.id} className={link.active ? styles.active : undefined} >{link.content}</li>))
            }
          </ul>
          }
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  imgUrl: PropTypes.string,
  imgClass: PropTypes.string,
  text: PropTypes.string,
  links: PropTypes.array
};
