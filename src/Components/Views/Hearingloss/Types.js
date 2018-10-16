import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";

import titleImage from "../../../Files/Images/bf_exp_img_header_about.png";

import hearingLossImageSenorineural from "../../../Files/Images/bf_exp_img_hearingloss_sensorineural.svg";
import hearingLossImageConductive from "../../../Files/Images/bf_exp_img_hearingloss_conductive.svg";
import hearingLossImageMixed from "../../../Files/Images/bf_exp_img_hearingloss_mixed.svg";
import hearingLossImage from "../../../Files/Images/bf_exp_img_hearingloss.svg";

export class Types extends Component {

    state = {
        displayedText: 'intro'
    };

    imgMap = {
        intro: hearingLossImage,
        sensorineural: hearingLossImageSenorineural,
        conductive: hearingLossImageConductive,
        mixed: hearingLossImageMixed
    };


    handleOnClick = (typeSuffix, event) => {

        // handle styling
        let alllabels = Array.from(document.getElementsByClassName(styles.labelWrapper));

        alllabels.forEach(obj => {
            obj.classList.remove(styles.activelabel);
        });

        let activeRows = Array.from(document.querySelectorAll('[data-belongsTo=' + typeSuffix + ']'));

        activeRows.forEach(obj => {
            obj.classList.add(styles.activelabel);
        });

        // Assign active class and assgin new text to state
        event.currentTarget.classList.add(styles.active);

        if (typeof this.prevButtonElement !== 'undefined') {
            if (event.currentTarget !== this.prevButtonElement) {
                this.prevButtonElement.classList.remove(styles.active);
            }
        }

        this.prevButtonElement = event.currentTarget;

        /**
         * Change text in item main.
         */
        this.setState({
            displayedText: typeSuffix
        });
    };

    render() {
        return (
            <div className={styles.grid}>

                <HeaderImage imgUrl={titleImage} alt={"Types of Hearingloss"}
                             title={<FormattedMessage id="app.hearingloss.types.title"/>}/>

                <div className={styles.content}>

                    <table width="95%" className={styles.infoTable}>
                        <tr>
                            <td className={styles.infographic} colSpan="6">
                                <img alt="types-hearingloss" width="100%"
                                     src={this.imgMap[this.state.displayedText]}/>
                            </td>
                        </tr>
                        <tr>
                            <td width="16%" className={styles.labelCell}>
                                <div data-belongsTo="sensorineural" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.sound"/>
                                </div>
                            </td>
                            <td width="18.7%" className={styles.labelCell}>
                                <div data-belongsTo="sensorineural" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.externalear"/>
                                </div>
                            </td>
                            <td width="15.4%" className={styles.labelCell}>
                                <div data-belongsTo="sensorineural" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.middleear"/>
                                </div>
                            </td>
                            <td width="17.6%" className={styles.labelCell}>
                                <div data-belongsTo="conductive" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.innerear"/>
                                </div>
                            </td>
                            <td width="17.9%" className={styles.labelCell}>
                                <div data-belongsTo="conductive" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.auditorynerve"/>
                                </div>
                            </td>
                            <td width="16%" className={styles.labelCell}>
                                <div data-belongsTo="conductive" className={styles.labelWrapper}>
                                    <FormattedMessage id="app.hearingloss.types.img.brain"/>
                                </div>
                            </td>
                        </tr>
                        <tr className={styles.buttonRow}>
                            <td width="50%" colSpan={3}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('conductive', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                                </button>
                            </td>
                            <td width="50%" colSpan={3}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('sensorineural', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={6}>
                                <button stlye="width:100%" className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('mixed', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

                <div className={styles.side}>
                    <h1 className={styles.typeTitle}><FormattedHTMLMessage
                        id={'app.hearingloss.types.title.' + this.state.displayedText}/></h1>
                    <p className={styles.mainParagraph}>
                        <FormattedHTMLMessage id={'app.hearingloss.types.text.' + this.state.displayedText}/>
                    </p>
                </div>

            </div>
        )
    }
};
