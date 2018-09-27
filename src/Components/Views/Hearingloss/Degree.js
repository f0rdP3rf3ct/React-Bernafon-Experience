import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_speechbanana from '../../../Files/Images/bf_exp_speechbanana.svg';
import styles from './Hearingloss.module.css';
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import {Audiogram} from "..";

export class Degree extends Component {

    state = {
        text: 'normalhearing',
        image: img_speechbanana,
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
                        <img width="100%" alt="normal hearing" src={this.state.image}/>

                        <button className={styles.audiogramButton} onClick={this.toggleAudiogramText}>
                            <FormattedHTMLMessage id={"app.audiogram.button." + this.state.showAudiogramInfo}/>
                        </button>

                        {this.state.showAudiogramInfo && (
                            <Audiogram/>
                        )}
                    </div>

                    <div className={styles.side}>
                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id="app.hearingloss.degree.intro"/>
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}