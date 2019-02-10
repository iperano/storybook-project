import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.footer}>
        {
          //this.props.children
        <ul>
          {
            this.props.links.map(link => (<li key={link.id} className={link.active ? styles.active : undefined}>{link.content}</li>))
          }
        </ul>
        }
      </div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node,
};
