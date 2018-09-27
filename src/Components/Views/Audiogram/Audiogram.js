import React, {Fragment} from 'react';
import styles from './Audiogram.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import titleImage from '../../../Files/Images/bf_exp_img_header_about.png';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_audiogram from '../../../Files/Images/bf_exp_img_audiogram.png';

export const Audiogram = () => (

    <Fragment>

        <p className={styles.mainParagraph}>
            <FormattedHTMLMessage id="app.audiogram.text"/>
        </p>

    </Fragment>
);