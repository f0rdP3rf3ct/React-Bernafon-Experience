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

        <div className={styles.content}>
            <p className={styles.mainParagraph}>
                <FormattedHTMLMessage id="app.audiogram.text"/>
            </p>
        </div>

        <div className={styles.side}>
            {/*TODO: Make this go back in  app history not in browser*/}
            <button className={styles.textButton} onClick={() => (window.history.back())}>
                <FormattedMessage id="app.navigation.back"/>
            </button>
        </div>

    </Fragment>
);