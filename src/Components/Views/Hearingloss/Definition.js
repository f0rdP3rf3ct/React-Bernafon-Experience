import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import styles from './Hearingloss.module.scss';

export const Definition = () => (
    <Fragment>
        <div className={styles['container-60-40']}>
            <div className={styles.mainItem}>
                <h1 className={styles.mainTitle}>
                    <FormattedMessage id="app.hearingloss.definition.title"/>
                </h1>
                <p className={styles.mainParagraph}>
                    <FormattedMessage id="app.hearingloss.definition.intro"/>
                </p>
            </div>
            <div className={styles.itemSide}>
                <ul className={styles.nonDectoratedList}>
                    <li>
                        <Link to="/hearingloss/types" className={styles.mainButton}>
                            <FormattedMessage id="app.hearingloss.definition.button.type"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hearingloss/cause" className={styles.mainButton}>
                            <FormattedMessage id="app.hearingloss.definition.button.cause"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/hearingloss/degree" className={styles.mainButton}>
                            <FormattedMessage id="app.hearingloss.definition.button.degrees"/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </Fragment>
);