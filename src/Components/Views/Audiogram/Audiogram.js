import React, {Component, Fragment} from 'react';
import styles from './Audiogram.module.css';
import {FormattedHTMLMessage} from 'react-intl';
import brn_exp_img_audiogram from "../../../Files/Images/bf_exp_img_audiogram.png";
import topFactImg from "../../../Files/Images/bf_exp_facts_top.svg";
import bottomFactImg from "../../../Files/Images/bf_exp_facts_bottom.svg";


export class Audiogram extends Component {

    state = {
        show: true
    };


    render() {
        return (
            <Fragment>
                {this.props.show && (
                    <div className={styles.interestingFact}>
                        <div className={styles.popup}>

                            <button onClick={this.props.onClick} className={styles.closeButton}></button>
                            <div className={styles.tableWrapper}>
                                <table className={styles.interestingFactsTable} cellPadding="0" cellSpacing="0">
                                    <tr>
                                        <td className={styles.factTop}>
                                            <img height="40px" src={topFactImg}/>
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
                                        <td>
                                            <img width="500px" src={brn_exp_img_audiogram}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className={styles.factBottom}>
                                            <img height="39px" src={bottomFactImg}/>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </Fragment>
        )
    }
}