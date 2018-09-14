import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.scss';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import causeImage from "../../../Files/Images/bf_exp_img_causes.png";


export const Cause = () => (
    <Fragment>

        <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                     title={<FormattedMessage id="app.hearingloss.cause.title"/>}/>

        <div className={styles['container-60-40']}>

            <div className={styles.itemMain}>
                <p className={styles.mainParagraph}>
                    <FormattedHTMLMessage id="app.hearingloss.cause.intro"/>
                </p>
            </div>
            <div className={styles.itemSide}>
                <img width="100%" src={causeImage}/>
            </div>

            {/*<h1 className={styles.mainTitle}>*/}
            {/*<FormattedMessage id="app.hearingloss.cause.title" />*/}
            {/*</h1>*/}

        </div>

    </Fragment>
);