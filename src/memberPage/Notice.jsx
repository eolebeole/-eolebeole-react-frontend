import { React } from 'react';

import { FiChevronsLeft } from 'react-icons/fi'

import styles from './Notice.module.css'



function Notice(props) {

  return (
    <div>
      <div className={styles.doubleLeft} onClick={() => props.setToggleTab(1)}>
        <div className={styles.icon}><FiChevronsLeft /></div>
      </div>
      <h3>Notice page</h3>
    </div>
  );
};

export default Notice;
