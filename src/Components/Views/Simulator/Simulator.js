import React, {Component, Fragment} from 'react';
import {FormattedHTMLMessage, FormattedMessage} from 'react-intl';
import styles from './Simulator.module.css';
import simImage from "../../../Files/Images/bf_exp_simulator_audiogram_blank.svg";
import sim20Image from "../../../Files/Images/bf_exp_simulator_audiogram_20.svg";
import sim60Image from "../../../Files/Images/bf_exp_simulator_audiogram_60.svg";
import sim80Image from "../../../Files/Images/bf_exp_simulator_audiogram_80.svg";
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";

import hl_sim_jazz_20 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_20.mp3";
import hl_sim_jazz_60 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_60.mp3";
import hl_sim_jazz_80 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_80.mp3";

import hl_sim_forest_20 from "../../../Files/Audio/Hearingloss_Simulation_Forest_v1_20.mp3";
import hl_sim_forest_60 from "../../../Files/Audio/Hearingloss_Simulation_Forest_v1_60.mp3";
import hl_sim_forest_80 from "../../../Files/Audio/Hearingloss_Simulation_Forest_v1_80.mp3";

import hl_sim_rest_20 from "../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_20.mp3";
import hl_sim_rest_60 from "../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_60.mp3";
import hl_sim_test_80 from "../../../Files/Audio/Hearingloss_Simulation_Restaurant_v1_80.mp3";

import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import {Audiogram} from "..";

// Maps audiofiles to the correponding age and topic
const audioMappings = {
    nature: {
        20: hl_sim_forest_20,
        60: hl_sim_forest_60,
        80: hl_sim_forest_80
    },
    speech: {
        20: hl_sim_rest_20,
        60: hl_sim_rest_60,
        80: hl_sim_test_80
    },
    music: {
        20: hl_sim_jazz_20,
        60: hl_sim_jazz_60,
        80: hl_sim_jazz_80
    }
};

export const AudiogramImage = (props) => {

    if (props.audiogram !== '') {
        return <img alt="audiogram" width="100%" src={props.audiogram}/>
    }

    return '';
};

export class Simulator extends Component {

    state = {
        audioPlayer: [
            {
                topic: 'nature',
                audiofile: audioMappings['nature']['20'],
                position: 0,
                playState: 'PAUSED',
                age: '20'
            },
            {
                topic: 'speech',
                audiofile: audioMappings['speech']['20'],
                position: 0,
                playState: 'PAUSED',
                age: '20'
            },
            {
                topic: 'music',
                audiofile: audioMappings['music']['20'],
                position: 0,
                playState: 'PAUSED',
                age: '20'
            }
        ],
        audiogram: simImage,
        showAudiogramInfo: false
    };

    changeActiveRow = (topic) => {
        let activeRows = Array.from(document.getElementsByClassName(styles.activeRow));

        activeRows.forEach(obj => {
            obj.classList.remove(styles.activeRow);
        });

        if (topic !== undefined) {
            let row = document.getElementById(topic + '-row');
            row.classList.add(styles.activeRow);
        }
    };

    /**
     * Updates PlayState of AudioPlayer
     * @param topic
     */
    updatePlayState = (topic) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic !== topic) {
                obj.playState = 'PAUSED';
            } else {
                obj.playState = obj.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';

                if (obj.playState === 'PAUSED') {
                    this.changeActiveRow(); // No param deselects all
                } else {
                    this.selectAgeButton(topic, obj.age);
                }
            }
        });

        this.setState({audioPlayer: states});
    };

    updateAudiogram = (age) => {
        let _audiogram = '';

        switch (age) {
            case '20' :
                _audiogram = sim20Image;
                break;
            case '60':
                _audiogram = sim60Image;
                break;
            case '80':
                _audiogram = sim80Image;
                break;
            default:
                _audiogram = sim20Image;

        }

        this.setState({audiogram: _audiogram});
    };

    /**
     * Updates PlayState of AudioPlayer when switching Agebutton
     * @param topic
     */
    updateWithAgeSelector = (topic, age) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic !== topic) {
                obj.playState = 'PAUSED';
            } else {
                obj.playState = 'PLAYING';
                obj.age = age;
            }
        });

        this.setState({audioPlayer: states});
    };

    selectAgeButton = (topic, age) => {
        let ageButtons = Array.from(document.getElementsByClassName(styles.ageButton));

        ageButtons.forEach(obj => {
            let tData = obj.getAttribute('data-topic');
            let aData = obj.getAttribute('data-age');

            if (tData === topic && aData === age) {
                obj.classList.add(styles.active);
            } else {
                obj.classList.remove(styles.active);
            }

        });
    };


    handleAgeSelectorClick = (topic, age, e) => {

        this.updateWithAgeSelector(topic, age);
        this.changeActiveRow(topic);
        this.updateAudiogram(age);

        /**
         * Handle button styling
         */
        let activeClasses = Array.from(document.getElementsByClassName(styles.active));

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
                obj.audiofile = audioMappings[topic][age];
            }
        });

        this.setState({audioPlayer: states});

    };

    handlePlayStateChange = (target, e) => {
        this.changeActiveRow(target.props.name);
        this.updatePlayState(target.props.name);
        this.updateAudiogram(target.props.age);
    };

    renderAgeButton = (topic, age) => {
        const str = topic + "-" + age;

        return (
            <button data-topic={topic} data-age={age} id={str} className={styles.ageButton}
                    onClick={(e) => this.handleAgeSelectorClick(topic, age, e)}>{age}</button>
        )
    };

    showAudiogramText = (e) => {
        let shoAudioGram = !this.state.showAudiogramInfo;
        this.setState({
            showAudiogramInfo: shoAudioGram
        })
    };

    render() {
        return (

            <Fragment>
                <div className={styles.gridSimulator}>

                    <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                                 title={<FormattedMessage id="app.simulator.title"/>}/>

                    <div className={styles.content}>

                        <table width="100%" cellPadding="0" cellspacing="0" className={styles.soundTable}>
                            <tbody>
                            <tr>
                                <th colSpan={2}></th>
                                <th colSpan={3}>
                                    <h3 className={styles.ageTitle}>
                                        <FormattedMessage id="app.simulator.age"/>
                                    </h3>
                                </th>
                                <th>
                                    <h3 className={styles.ageTitle}>
                                        <FormattedMessage id="app.simulator.audiogram"/>
                                    </h3>
                                </th>
                            </tr>
                            <tr id="nature-row">
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[0].playState}
                                                 name={this.state.audioPlayer[0].topic}
                                                 age={this.state.audioPlayer[0].age}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[0].audiofile}
                                                 onHandlePause={(e) => this.handlePause(e)}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    <span className={styles.nature}></span>
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('nature', '20')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('nature', '60')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('nature', '80')}
                                </td>
                                <td rowSpan={3} className={styles.audiogramCol}>
                                    <AudiogramImage audiogram={this.state.audiogram}/>
                                </td>
                            </tr>
                            <tr id="speech-row">
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[1].playState}
                                                 name={this.state.audioPlayer[1].topic}
                                                 age={this.state.audioPlayer[1].age}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[1].audiofile}
                                                 onHandlePause={(e) => this.handlePause(e)}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    <span className={styles.speech}></span>
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('speech', '20')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('speech', '60')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('speech', '80')}
                                </td>
                            </tr>
                            <tr id="music-row">
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[2].playState}
                                                 name={this.state.audioPlayer[2].topic}
                                                 age={this.state.audioPlayer[2].age}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[2].audiofile}
                                                 onHandlePause={(e) => this.handlePause(e)}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    <span className={styles.music}></span>
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('music', '20')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('music', '60')}
                                </td>
                                <td className={styles.ageCell}>
                                    {this.renderAgeButton('music', '80')}
                                </td>
                            </tr>
                            </tbody>
                        </table>

                        <Audiogram onClick={this.showAudiogramText} show={this.state.showAudiogramInfo} />

                    </div>

                    <div className={styles.side}>

                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id="app.simulator.intro"/>
                        </p>

                        <button className={styles.audiogramButton} onClick={this.showAudiogramText}>
                            <FormattedHTMLMessage id={"app.audiogram.button." + this.state.showAudiogramInfo}/>
                        </button>

                    </div>
                </div>
            </Fragment>
        )
    }
}