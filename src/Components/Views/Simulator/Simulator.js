import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './Simulator.module.scss';
import sim20Image from "../../../Files/Images/bf_exp_img_simulator_20.png";
import sim40Image from "../../../Files/Images/bf_exp_img_simulator_40.png";
import sim60Image from "../../../Files/Images/bf_exp_img_simulator_60.png";
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import testfile from "../../../Files/Audio/testfile.mp3";
import {Link} from "react-router-dom";
import AudioPlayer from "../../AudioPlayer/AudioPlayer";

const audioMappings = {
    nature: {
        20: testfile,
        40: testfile,
        60: testfile
    },
    speech: {
        20: testfile,
        40: testfile,
        60: testfile
    },
    music: {
        20: testfile,
        40: testfile,
        60: testfile
    }
};


export class Simulator extends Component {

    state = {
        audioPlayer: [
            {
                topic: 'nature',
                audiofile: audioMappings['nature']['20'],
                position: 0,
                playState: 'PAUSED'
            },
            {
                topic: 'speech',
                audiofile: audioMappings['speech']['20'],
                position: 0,
                playState: 'PAUSED'
            },
            {
                topic: 'music',
                audiofile: audioMappings['music']['20'],
                position: 0,
                playState: 'PAUSED'
            }
        ],
    };

    handleAgeSelectorClick = (topic, age, e) => {
        const states = this.state.audioPlayer.slice();

        states.forEach(obj => {

            if (obj.topic === topic) {
                obj.audiofile = audioMappings[topic][age];
                obj.playState = 'PLAYING';
            } else {
                obj.playState = 'PAUSED';
            }
        });

        /**
         * Handle styling
         */

        this.setState({audioPlayer: states});
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
            <button className={[styles.textButton, styles.ageButton].join(' ')}
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

                        <table>
                            <tr>
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[0].playState}
                                                 name={this.state.audioPlayer[0].topic}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[0].audiofile}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '40')}
                                </td>
                                <td>
                                    {this.renderAgeButton('nature', '60')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[1].playState}
                                                 name={this.state.audioPlayer[1].topic} volume={100}
                                                 audiofile={this.state.audioPlayer[1].audiofile}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '40')}
                                </td>
                                <td>
                                    {this.renderAgeButton('speech', '60')}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <AudioPlayer playState={this.state.audioPlayer[2].playState}
                                                 name={this.state.audioPlayer[2].topic}
                                                 volume={100}
                                                 audiofile={this.state.audioPlayer[2].audiofile}
                                                 onClick={(e) => this.handlePlayStateChange(e)}
                                    />
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '20')}
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '40')}
                                </td>
                                <td>
                                    {this.renderAgeButton('music', '60')}
                                </td>
                            </tr>
                        </table>
                    </div>

                    <div className={styles.itemSide}>
                        {/*TODO: Refactor image handling*/}
                        <img alt="audiogram" width="100%" src={this.state.audiogram}/>
                    </div>

                </div>

            </Fragment>
        )
    }
}