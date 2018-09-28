import React, {Fragment} from 'react';
import styles from './Audiogram.module.css';
import {FormattedHTMLMessage} from 'react-intl';

import topFactImg from "../../../Files/Images/bf_exp_facts_top.svg";
import bottomFactImg from "../../../Files/Images/bf_exp_facts_bottom.svg";


export const Audiogram = () => (
    <Fragment>
        <div className={styles.interestingFact}>

            <table className={styles.interestingFactsTable} cellpadding="0" cellspacing="0">
                <tr>
                    <td className={styles.factTop}>
                        <img height="40px" src={topFactImg} />
                    </td>
                    <td height="20px">
                        <h3 className={styles.factTitle}>
                            <FormattedHTMLMessage id="app.audiogram.subtitle"/>
                        </h3>
                    </td>
                </tr>
                <tr>
                    <td className={styles.factMiddle}>
                        <div className={styles.factLine}></div>
                    </td>
                    <td>
                        <p className={styles.factParagraph}>
                            <FormattedHTMLMessage id="app.audiogram.text"/>
                        </p>
                    </td>
                </tr>
                <tr>
                    <td className={styles.factBottom}>
                        <img height="39px" src={bottomFactImg} />
                    </td>
                    <td>
                    </td>
                </tr>
            </table>
        </div>

    </Fragment>
);