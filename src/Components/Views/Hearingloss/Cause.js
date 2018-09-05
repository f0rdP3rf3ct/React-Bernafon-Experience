import React, { Fragment } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import styles from './Hearingloss.module.scss';

export const Cause = () => (
    <Fragment>
        <h1 className={styles.mainTitle}>
            <FormattedMessage id="app.hearingloss.cause.title" />
        </h1>
        <p className={styles.mainParagraph}>
            <FormattedHTMLMessage id="app.hearingloss.cause.intro" />
        </p>
    </Fragment>
);