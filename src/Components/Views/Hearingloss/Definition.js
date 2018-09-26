import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';
import styles from './Hearingloss.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";

export const Definition = () => (
    <Fragment>

        <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                     title={<FormattedMessage id="app.hearingloss.definition.title"/>}/>

        <div className={styles.content}>
            <p className={styles.mainParagraph}>
                <FormattedMessage id="app.hearingloss.definition.intro"/>
            </p>
        </div>

        <div className={styles.side}>
            <ul className={styles.buttonList}>
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
    </Fragment>
);