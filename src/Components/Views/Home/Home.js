import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import styles from './Home.module.css';


export const Home = () => (
    <div className={styles.grid}>

        <div className={styles.content}>
            <div className={styles.itemMain}>
                <h1 className={styles.mainTitle}>
                    <FormattedMessage id="app.home.title"/>
                </h1>
            </div>
        </div>

        <div className={styles.side}>
            <Link to="/hearingloss" className={styles.mainButton}>
                <FormattedMessage id="app.home.button.start"/>
            </Link>
        </div>

    </div>
);