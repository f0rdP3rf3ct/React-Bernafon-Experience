import React, {Fragment} from "react";
import styles from './HeaderImage.module.css';

export const HeaderImage = (props) => (
  <Fragment>
      <div className={styles.wrapper}>
          <h1 className={styles.imgTitle}>{props.title}</h1>
          <img className={styles.imgSrc} width="100%" src={props.imgUrl} alt={props.alt} />
      </div>
  </Fragment>
);