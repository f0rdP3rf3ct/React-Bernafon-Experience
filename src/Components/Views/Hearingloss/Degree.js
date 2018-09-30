import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import SpeechBanana from "../../SpeechBanana/SpeechBanana";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import {Audiogram} from "..";

export class Degree extends Component {

    state = {
        text: 'normalhearing',
        showAudiogramInfo: false
    };

    toggleAudiogramText = () => {
        let shoAudioGram = !this.state.showAudiogramInfo;
        this.setState({
            showAudiogramInfo: shoAudioGram
        })
    };

    render() {
        return (
            <Fragment>
                <div className={styles.grid}>
                    <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                                 title={<FormattedMessage id="app.hearingloss.degree.title"/>}/>

                    <div className={styles.content}>
                        <SpeechBanana />
                        <Audiogram onClick={this.toggleAudiogramText} show={this.state.showAudiogramInfo}/>
                    </div>

                    <div className={styles.side}>
                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id="app.hearingloss.degree.intro"/>
                        </p>
                        <button className={styles.audiogramButton} onClick={this.toggleAudiogramText}>
                            <FormattedHTMLMessage id={"app.audiogram.button.false"}/>
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
}