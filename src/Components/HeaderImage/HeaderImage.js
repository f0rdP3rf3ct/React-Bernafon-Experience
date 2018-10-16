import React, {Fragment} from "react";
import styles from './HeaderImage.module.css';

export const HeaderImage = (props) => (
  <Fragment>
      <div className={styles.headerBackground}></div>
      <h1 className={styles.imgTitle}>{props.title}</h1>
  </Fragment>
);