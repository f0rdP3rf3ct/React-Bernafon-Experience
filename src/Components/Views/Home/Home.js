import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import styles from './Home.module.css';


export const Home = () => (
    <Fragment>
        <div className={styles['container-60-40']}>
            <div className={styles.itemMain}>

                <h1 className={styles.mainTitle}>
                    <FormattedMessage id="app.home.title"/>
                </h1>

                <p className={styles.mainParagraph}>
                    <FormattedHTMLMessage id="app.home.intro"/>
                </p>

            </div>

            <div className={styles.itemSide}>
                <Link to="/hearingloss" className={styles.mainButton}>
                    <FormattedMessage id="app.home.button.start"/>
                </Link>
            </div>
        </div>

    </Fragment>
);