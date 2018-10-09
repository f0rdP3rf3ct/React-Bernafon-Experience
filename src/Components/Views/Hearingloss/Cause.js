import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.css';
import {HeaderImage} from "./../../HeaderImage/HeaderImage";
import aboutImage from "./../../../Files/Images/bf_exp_img_header_about.png";
import causeImage from "./../../../Files/Images/bf_exp_img_causes.png";


export const Cause = () => (
    <Fragment>
        <div className={styles.grid}>
            <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                         title={<FormattedMessage id="app.hearingloss.cause.title"/>}/>

            <div className={styles.content}>
                <p className={styles.mainParagraph}>
                    <FormattedHTMLMessage id="app.hearingloss.cause.intro"/>
                </p>
            </div>

            <div className={styles.side}>
                <img className={styles.causeImage} width="100%" src={causeImage}/>
            </div>
        </div>

    </Fragment>
);