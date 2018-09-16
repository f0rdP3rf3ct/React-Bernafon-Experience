import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.scss';
import {HeaderImage} from "../../HeaderImage/HeaderImage";

import titleImage from "../../../Files/Images/bf_exp_img_header_about.png";

import hearingLossImageSenorineural from "../../../Files/Images/bf_exp_img_hearingloss_sensorineural.png";
import hearingLossImageConductive from "../../../Files/Images/bf_exp_img_hearingloss_conductive.png";
import hearingLossImageMixed from "../../../Files/Images/bf_exp_img_hearingloss_mixed.png";
import hearingLossImage from "../../../Files/Images/bf_exp_img_hearingloss_intro.png";

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

                <div className={styles['container-60-40']}>

                    <div className={styles.itemMain}>
                        <h1><FormattedHTMLMessage id={'app.hearingloss.types.title.' + this.state.displayedText}/></h1>
                        <p className={styles.mainParagraph}>
                            <img alt="types-hearingloss" width="100%" src={this.imgMap[this.state.displayedText]}/>
                            <FormattedHTMLMessage id={'app.hearingloss.types.text.' + this.state.displayedText}/>
                        </p>
                    </div>
                    <div className={styles.itemSide}>
                        <ul className={styles.nonDectoratedList}>
                            <li className={styles.listItem}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('sensorineural', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                                </button>
                            </li>
                            <li className={styles.listItem}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('conductive', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                                </button>
                            </li>
                            <li className={styles.listItem}>
                                <button className={styles.textButton} onClick={(e) => this.handleOnClick('mixed', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                                </button>
                            </li>
                        </ul>
                    </div>


                </div>
            </Fragment>
        )
    }
};
