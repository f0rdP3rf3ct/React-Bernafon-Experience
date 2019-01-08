import React, { Component, Fragment } from 'react';
import { FormattedHTMLMessage, FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import styles from './Simulator.module.css';

import HeaderImage from '../../HeaderImage/HeaderImage';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';
import AudiogramImage from '../../AudiogramImage/AudiogramImage';
import {  Audiogram  } from '../Audiogram/Audiogram';
import aboutImage from '../../../Files/Images/bf_exp_img_header_about.png';

import hlSimJazz20 from '../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_20.mp3';
import hlSimJazz60 from '../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_60.mp3';
import hlSimJazz80 from '../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_80.mp3';

import hlSimForest20 from '../../../Files/Audio/Hearingloss_Simulation_Forest_v1_20.mp3';
import hlSimForest60 from '../../../Files/Audio/Hearingloss_Simulation_Forest_v1_60.mp3';
import hlSimForest80 from '../../../Files/Audio/Hearingloss_Simulation_Forest_v1_80.mp3';

import hlSimRest20 from '../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_20.mp3';
import hlSimRest60 from '../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_60.mp3';
import hlSimRest80 from '../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_80.mp3';

/**
 * Maps Soundfiles to object
 */
const AUDIO_DICT = {
    nature: {
        20: hlSimForest20,
        60: hlSimForest60,
        80: hlSimForest80
     },
    speech: {
        20: hlSimRest20,
        60: hlSimRest60,
        80: hlSimRest80
     },
    music: {
        20: hlSimJazz20,
        60: hlSimJazz60,
        80: hlSimJazz80
     }
 };

export const AgeButton = (props) => {
    return (
        <button data-topic={  props.topic  }
                data-age={  props.age  } id={  props.topic + '-' + props.age  }
                className={  styles.ageButton  }
                onClick={  (e) => props.onAgeButtonClick(props.topic, props.age, e)  }>{props.age}
        </button>
    )
};

AgeButton.propTypes = {
    onAgeButtonClick: PropTypes.any.isRequired,
    topic: PropTypes.string.isRequired,
    age: PropTypes.any.isRequired
};

export class Simulator extends Component {

    state = {
        audioPlayer: [
            {
                topic: 'nature',
                audiofile: AUDIO_DICT[ 'nature' ][ '20' ],
                position: 0,
                playState: 'PAUSED',
                age: '20'
             },
            {
                topic: 'speech',
                audiofile: AUDIO_DICT[ 'speech' ][ '20' ],
                position: 0,
                playState: 'PAUSED',
                age: '20'
             },
            {
                topic: 'music',
                audiofile: AUDIO_DICT[ 'music' ][ '20' ],
                position: 0,
                playState: 'PAUSED',
                age: '20'
             }
        ],
        audiogram: '_blank',
        showAudiogramInfo: false
     };

    /**
     * Change currently active row to a new topic.
     * If topic is undefined it deactives all.
     * @param { string } topic - name of topic to change to
     */
    changeActivePlayerRow = (topic) => {
        const activeRows = Array.from(document.getElementsByClassName(styles.activeRow));

        activeRows.forEach(obj => {
            obj.classList.remove(styles.activeRow);
         });

        if (topic !== undefined && topic !== '') {
            const row = document.getElementById(topic + '-row');
            row.classList.add(styles.activeRow);
         }
     };

    /**
     * Updates PlayState of AudioPlayer.
     * @param { string } topic - name of topic to activate
     */
    updatePlayState = (topic) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic !== topic) {
                obj.playState = 'PAUSED';
             } else {
                obj.playState = obj.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
                if (obj.playState === 'PAUSED') {
                    this.changeActivePlayerRow('');
                 } else {
                    this.selectAgeButton(topic, obj.age);
                 }
             }
         });

        this.setState({ audioPlayer: states });
     };

    /**
     * Change state of audiogram
     * @param { number | string } age - audiogram of age to be displayed
     */
    updateAudiogramState = (age) => {
        this.setState({ audiogram: age });
     };

    /**
     * Updates PlayState of AudioPlayer when switching AgeButton
     * @param { string } topic - name of topic to change to
     * @param { number } age - age to change to
     */
    updatePlayStateWithAgeSelector = (topic, age) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic !== topic) {
                obj.playState = 'PAUSED';
             } else {
                obj.playState = 'PLAYING';
                obj.age = age;
             }
         });

        this.setState({ audioPlayer: states });
     };

    /**
     * Adds active class depending on params to an AgeButton
     * @param { string } topic - name of topic
     * @param { number | string } age
     */
    selectAgeButton = (topic, age) => {
        const ageButtons = Array.from(document.getElementsByClassName(styles.ageButton));

        ageButtons.forEach(obj => {
            const tData = obj.getAttribute('data-topic');
            const aData = obj.getAttribute('data-age');

            if (tData === topic && aData === age.toString()) {
                obj.classList.add(styles.active);
             } else {
                obj.classList.remove(styles.active);
             }

         });
     };

    /**
     * Update Simulator on AudioPlayer Click
     * @param { string } topic
     * @param { string } age
     */
    handleAudioPlayerClick = (topic, age) => {
        this.updatePlayState(topic);
        this.changeActivePlayerRow(topic);
        this.updateAudiogramState(age);
     };

    /**
     * Update Simulator on AgeButton Click
     * @param { string } topic - topic to change to
     * @param { number } age - age to change to
     * @param { object } e - event object
     */
    handleAgeButtonClick = (topic, age, e) => {
        this.updatePlayStateWithAgeSelector(topic, age);
        this.changeActivePlayerRow(topic);
        this.updateAudiogramState(age);

        /**
         * Handle button styling
         */
        const activeClasses = Array.from(document.getElementsByClassName(styles.active));

        activeClasses.forEach(obj => {
            obj.classList.remove(styles.active);
         });

        e.target.classList.add(styles.active);

        /**
         * Handle AudioPlayer states
         */
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic === topic) {
                obj.audiofile = AUDIO_DICT[ topic ][ age ];
             }
         });

        this.setState({  audioPlayer: states  });
     };

    /**
     * Show / Hide Audiogram Lightbox
     */
    handleAudiogramButtonClick = () => {
        const shoAudioGram = !this.state.showAudiogramInfo;
        this.setState({
            showAudiogramInfo: shoAudioGram
         })
     };

    /**
     * Returns single AgeButton
     * @param { string } topic
     * @param { string | number } age
     */
    renderAgeButton = (topic, age) => {
        return <AgeButton
            topic={ topic }
            onAgeButtonClick={  (topic, age, e) => this.handleAgeButtonClick(topic, age, e)  }
            age = { age }
        />
    };

    /**
     * Returns single AudioPlayer
     * @param { number } index
     * @param { number } volume
     */
    renderAudioPlayer = (index, volume) => {
        return <AudioPlayer playState={  this.state.audioPlayer[ index ].playState  }
                     name={  this.state.audioPlayer[ index ].topic  }
                     age={  this.state.audioPlayer[ index ].age  }
                     volume={  volume  }
                     audiofile={  this.state.audioPlayer[ index ].audiofile  }
                     onHandlePause={  (e) => this.handlePause(e)  }
                     onClick={  (topic, age) => this.handleAudioPlayerClick(topic, age)  }
        />
    };

    render() {
        return <Fragment>
            <div className={ styles.gridSimulator }>

                <HeaderImage imgUrl={  aboutImage  } alt={  'About Hearing'  }
                             title={  <FormattedMessage id='app.simulator.title'/>  }/>

                <div className={ styles.content }>

                    <table width='100%' cellPadding={ 0 } cellSpacing={ 0 } className={  styles.soundTable  }>
                        <thead>
                            <tr>
                                <th colSpan={ 2 }>
                                    <span className={styles.sound}/>
                                </th>
                                <th colSpan={ 3 }>
                                    <h3 className={  styles.ageTitle  }>
                                        <FormattedMessage id='app.simulator.age'/>
                                    </h3>
                                </th>
                                <th>
                                    <h3 className={  styles.ageTitle  }>
                                        <FormattedMessage id='app.simulator.audiogram'/>
                                    </h3>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr id='nature-row'>
                                <td>
                                    <span className={  styles.nature  }>{ /* Nature Icon */ }</span>
                                </td>
                                <td>
                                    { this.renderAudioPlayer(0, 100) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('nature', 20) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('nature', 60) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('nature', 80) }
                                </td>
                                { /* Exceptional audiogram column*/ }
                                <td rowSpan={ 3 } className={  styles.audiogramCol  }>
                                    <AudiogramImage audiogram={  this.state.audiogram  }/>
                                </td>
                            </tr>

                            <tr id='speech-row'>
                                <td>
                                    <span className={  styles.speech  }>{ /* speech Icon */ }</span>
                                </td>
                                <td>
                                    { this.renderAudioPlayer(1, 100) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('speech', 20) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('speech', 60) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('speech', 80) }
                                </td>
                            </tr>

                            <tr id='music-row'>
                                <td>
                                    <span className={ styles.music }>{ /* Music Icon */ }</span>
                                </td>
                                <td>
                                    { this.renderAudioPlayer(2, 100) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('music', 20) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('music', 60) }
                                </td>
                                <td className={  styles.ageCell  }>
                                    { this.renderAgeButton('music', 80) }
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <Audiogram onClick={ this.handleAudiogramButtonClick } show={ this.state.showAudiogramInfo }/>

                </div>
                <div className={ styles.side }>
                    <p className={ [ styles.mainParagraph, styles.spaceUp ].join(' ') }>
                        <FormattedHTMLMessage id='app.simulator.intro'/>
                    </p>
                    <button className={ styles.audiogramButton } onClick={ this.handleAudiogramButtonClick }>
                        <FormattedHTMLMessage id={ 'app.audiogram.button.' + this.state.showAudiogramInfo }/>
                    </button>
                </div>
            </div>
        </Fragment>
     }
 }
