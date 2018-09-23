import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './Simulator.module.css';
import sim20Image from "../../../Files/Images/bf_exp_img_simulator_20.png";
import sim60Image from "../../../Files/Images/bf_exp_img_simulator_40.png";
import sim80Image from "../../../Files/Images/bf_exp_img_simulator_60.png";
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";

import hl_sim_jazz_20 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_20.mp3";
import hl_sim_jazz_60 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_60.mp3";
import hl_sim_jazz_80 from "../../../Files/Audio/Hearingloss_Simulation_Jazz_Music_v1_80.mp3";

import {Link} from "react-router-dom";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";
import AgeButton from "../../AgeButton/AgeButton";

// Maps audiofiles to the correponding age and topic
const audioMappings = {
    nature: {
        20: hl_sim_jazz_20,
        60: hl_sim_jazz_60,
        80: hl_sim_jazz_80
    },
    speech: {
        20: hl_sim_jazz_20,
        60: hl_sim_jazz_60,
        80: hl_sim_jazz_80
    },
    music: {
        20: hl_sim_jazz_20,
        60: hl_sim_jazz_60,
        80: hl_sim_jazz_80
    }
};

export const AudiogramImage = (props) => {

    if(props.audiogram !== '') {
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
        audiogram: ''
    };

    handleAgeSelectorClick = (topic, age, e) => {

        /**
         * Handle button stylings
         */

        e.target.classList.toggle(styles.active);

        const activeClasses = document.getElementsByClassName(styles.active);
        [].forEach.call(activeClasses, function (el) {
            if (el !== e.target) {
                el.classList.remove(styles.active);
            }
        });

        /**
         * Handle AudioPlayer states
         */
        const states = this.state.audioPlayer.slice();

        // Needs to get position from audioPlayer
        states.forEach(obj => {

            if (obj.topic === topic) {

                // Toggle Sound if same age is clicked as before
                if (obj.age === age) {
                    obj.playState = obj.playState === 'PAUSED' ? 'PLAYING' : 'PAUSED';

                } else {
                    obj.age = age;
                    obj.playState = 'PLAYING';
                }

                obj.audiofile = audioMappings[topic][age];
            } else {
                obj.playState = 'PAUSED';
            }
        });

        this.setState({audioPlayer: states});

        /**
         * Handle audiogram state
         */

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

    handlePlayStateChange = (target, e) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {
            if (obj.topic !== target.props.name) {
                obj.playState = 'PAUSED';
            } else {
                obj.playState = obj.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
            }
        });

        this.setState({audioPlayer: states});
    };

    renderAgeButton = (topic, age) => {
        return (
            <button className={styles.ageButton}
                    onClick={(e) => this.handleAgeSelectorClick(topic, age, e)}>{age}</button>
        )
    };

    render() {
        return (
            <Fragment>

                <HeaderImage imgUrl={aboutImage} alt={"About Hearing"}
                             title={<FormattedMessage id="app.simulator.title"/>}/>

                <Link to="/audiogram" className={styles.mainButton}>
                    <FormattedMessage id="app.hearingloss.degree.button.audiogram"/>
                </Link>

                <div className={styles['container-60-40']}>

                    <div className={styles.itemMain}>

                        <table className={styles.soundTable}>
                            <tr>
                                <td>

                                </td>
                                <td colSpan="3">
                                    <h3 className={styles.ageTitle}>
                                        <FormattedMessage id="app.simulator.age"/>
                                    </h3>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.music}>
                                        <AudioPlayer playState={this.state.audioPlayer[0].playState}
                                                     name={this.state.audioPlayer[0].topic}
                                                     volume={100}
                                                     audiofile={this.state.audioPlayer[0].audiofile}
                                                     onHandlePause={(e) => this.handlePause(e)}
                                                     onClick={(e) => this.handlePlayStateChange(e)}
                                        />
                                    </span>
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '60')}
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '80')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.speech}>
                                        <AudioPlayer playState={this.state.audioPlayer[1].playState}
                                                     name={this.state.audioPlayer[1].topic} volume={100}
                                                     audiofile={this.state.audioPlayer[1].audiofile}
                                                     onHandlePause={(e) => this.handlePause(e)}
                                                     onClick={(e) => this.handlePlayStateChange(e)}
                                        />
                                    </span>
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '60')}
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '80')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span className={styles.nature}>
                                    <AudioPlayer playState={this.state.audioPlayer[2].playState}
                                                 name={this.state.audioPlayer[2].topic}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[2].audiofile}
                                                 onHandlePause={(e) => this.handlePause(e)}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                    </span>
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '60')}
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '80')}
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.itemSide}>


                        {/*TODO: Refactor image handling*/}
                        <AudiogramImage audiogram={this.state.audiogram}/>

                        <p className={styles.mainParagraph}>
                            <FormattedMessage id="app.simulator.intro"/>
                        </p>

                    </div>

                </div>

            </Fragment>
        )
    }
}