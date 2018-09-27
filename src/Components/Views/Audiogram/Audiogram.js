import React, {Fragment} from 'react';
import styles from './Audiogram.module.css';
import {FormattedHTMLMessage} from 'react-intl';

export const Audiogram = () => (
    <Fragment>
        <p className={styles.mainParagraph}>
            <FormattedHTMLMessage id="app.audiogram.text"/>
        </p>
    </Fragment>
);