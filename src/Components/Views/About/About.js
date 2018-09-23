import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";
import styles from './About.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";


export const About = () => (
    <Fragment>

        <HeaderImage imgUrl={aboutImage} alt={"About Hearing"} title={<FormattedMessage id="app.about.title"/>} />

        <div className={styles['container-60-40']}>

            <div className={styles.itemMain}>
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
