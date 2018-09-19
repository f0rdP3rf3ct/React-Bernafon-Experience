import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.scss';
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
            <Fragment>

                <HeaderImage imgUrl={titleImage} alt={"Types of Hearingloss"}
                             title={<FormattedMessage id="app.hearingloss.types.title"/>}/>


                <h1><FormattedHTMLMessage id={'app.hearingloss.types.title.' + this.state.displayedText}/></h1>

                <div className={styles["container-60-40"]}>

                    <div className={styles.itemMain}>
                        <table width="80%" className={styles.infoTable}>
                            <tr>
                                <td className={styles.infographic} colspan="2">
                                    <img alt="types-hearingloss" width="100%"
                                         src={this.imgMap[this.state.displayedText]}/>
                                </td>
                            </tr>
                            <tr>
                                <td width="50%">
                                    <button className={styles.textButton}
                                            onClick={(e) => this.handleOnClick('conductive', e)}>
                                        <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                                    </button>
                                </td>
                                <td width="50%">
                                    <button className={styles.textButton}
                                            onClick={(e) => this.handleOnClick('sensorineural', e)}>
                                        <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button stlye="width:100%" className={styles.textButton}
                                            onClick={(e) => this.handleOnClick('mixed', e)}>
                                        <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                                    </button>
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.itemSide}>
                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id={'app.hearingloss.types.text.' + this.state.displayedText}/>
                        </p>
                    </div>
                </div>

            </Fragment>
        )
    }
};
