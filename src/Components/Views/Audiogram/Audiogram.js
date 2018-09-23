import React, {Fragment} from 'react';
import styles from './Audiogram.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import titleImage from '../../../Files/Images/bf_exp_img_header_about.png';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_audiogram from '../../../Files/Images/bf_exp_img_audiogram.png';

export const Audiogram = () => (
    <Fragment>

        <HeaderImage imgUrl={titleImage} alt={"Audiogram"}
                     title={<FormattedMessage id="app.audiogram.title"/>}/>

        <div className={styles['container-60-40']}>

            <div className={styles.itemMain}>
                <p className={styles.mainParagraph}>
                    <FormattedHTMLMessage id="app.audiogram.text"/>
                </p>


                {/*TODO: Make this go back in  app history not in browser*/}
                <button className={styles.textButton} onClick={() => (window.history.back())}>
                    <FormattedMessage id="app.navigation.back"/>
                </button>

            </div>

            <div className={styles.itemSide}>
                <img width="100%" src={img_audiogram} alt="audiogram"/>
            </div>
        </div>

    </Fragment>
);