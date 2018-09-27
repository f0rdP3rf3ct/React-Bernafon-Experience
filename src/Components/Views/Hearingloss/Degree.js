import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_mildhearing from '../../../Files/Images/bf_exp_img_mildhearing.png';
import img_moderatehearing from '../../../Files/Images/bf_exp_img_moderatehearing.png';
import img_normalhearing from '../../../Files/Images/bf_exp_img_normalhearing.png';
import img_profoundhearing from '../../../Files/Images/bf_exp_img_profoundhearing.png';
import styles from './Hearingloss.module.css';
import {Link} from "react-router-dom";
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import {Audiogram, AudiogramImage} from "..";


export class Degree extends Component {

    state = {
        text: 'normalhearing',
        image: img_normalhearing,
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

                <HeaderImage imgUrl={aboutImage} alt={"About Hearing"} title={<FormattedMessage id="app.hearingloss.degree.title"/>}/>

                <div className={styles.content}>
                    <img width="100%" alt="normal hearing" src={this.state.image}/>

                    <button className={styles.audiogramButton} onClick={this.toggleAudiogramText}>
                        <FormattedHTMLMessage id={"app.audiogram.button." + this.state.showAudiogramInfo}/>
                    </button>

                    {this.state.showAudiogramInfo && (
                        <Audiogram />
                    )}

                </div>

                <div className={styles.side}>

                    <p className={styles.mainParagraph}>
                        <FormattedHTMLMessage id="app.hearingloss.degree.intro"/>
                    </p>


                </div>

            </Fragment>
        )
    }
}