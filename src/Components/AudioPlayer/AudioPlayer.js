import React, {Component} from 'react';
import Sound from "react-sound";
import honksound from "../../Files/Audio/sample.mp3";
import {FormattedMessage} from "react-intl";
import '../../CSS/IconFont.css';
import './AudioPlayer.css';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playState: 'PAUSED',
            duration: '',
            position: '0:0:0'
        }
    }

    /**
     * Convers milliseconds to readable string
     * @param inms
     * @returns {string}
     */
    convertMSToFormattedString = (inms) => {
        let ms = inms % 1000;
        inms = (inms - ms) / 1000;
        let secs = inms % 60;
        inms = (inms - secs) / 60;
        let mins = inms % 60;
        let hrs = (inms - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    };

    /**
     * Toggle Soundstate
     * @param {string} soundState
     */
    handleSoundState = () => {
        let newState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
        this.setState({playState: newState});
    };


    /**
     * Handles actions while the file is playing
     */
    handlePlaying = (e) => {
        let formattedDuration = this.convertMSToFormattedString(e.position);
        this.setState({position: formattedDuration});
    };


    /**
     * Called when file has finished playing
     */
    handleFinishedPlaying = (e) => {
        this.setState({
            playState: 'PAUSED',
            position: '0:0:0'
        })
    };


    render() {
        return (
            <div className="AudioPlayer">

                <div className="Information">
                    <p>{this.state.position}</p>
                </div>

                {/* Reflect playstate */}
                <div onClick={this.handleSoundState} className={'icon icon-' + this.state.playState}></div>

                <Sound url={honksound}
                       onFinishedPlaying={(e) => this.handleFinishedPlaying(e)}
                       onPlaying={(e) => this.handlePlaying(e)}
                       playStatus={this.state.playState} loop={false}
                       volume={50}
                />
            </div>
        );
    }

}

export default AudioPlayer;