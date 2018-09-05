import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";
import styles from './About.module.scss';


export const About = () => (
    <Fragment>
        <div className={styles['container-60-40']}>

            <div className={styles.itemMain}>
                <h1>
                    <FormattedMessage id="app.about.title"/>
                </h1>
                <p className={styles.mainParagraph}>
                    <FormattedHTMLMessage id="app.about.intro"/>
                </p>
            </div>

            <div className={styles.itemSide}>
                <Link to="/hearingloss/definition" className={styles.mainButton}>
                    <FormattedMessage id="app.about.button.definition"/>
                </Link>
                <Link to="/hearingloss/simulator" className={styles.mainButton}>
                    <FormattedMessage id="app.about.button.simulator"/>
                </Link>
            </div>
        </div>
    </Fragment>
);
