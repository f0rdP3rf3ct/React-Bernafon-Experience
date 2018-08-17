import React, {Component} from 'react';
import Sound from "react-sound";
import honksound from "../../Files/Audio/sample.mp3";
import '../../CSS/IconFont.css';
import './AudioPlayer.css';

class AudioPlayer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            playState: 'PAUSED',
            duration: '',
            position: '0:0:0'
        };

        this.id = this.props.id;
    }

    componentDidMount() {
        let selector = 'AudioPlayer ' + this.id;
        this.progressbar = document.getElementsByClassName(selector)[0].getElementsByClassName('Progress')[0];
        console.log('Progresbar: ', this.progressbar);
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
        this.progressbar.value = e.position;
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

    /**
     * Handle completed file load
     */
    handleLoading = (e) => {
        this.setState({duration : e.duration});
    };

    render() {
        return (
            <div className={"AudioPlayer " + this.props.id }>

                <div className="Information">
                    <p>{this.state.position}</p>
                </div>

                <input min="0" max={this.state.duration} className="Progress" type="range"></input>

                {/* Reflect playstate */}
                <div onClick={this.handleSoundState} className={'icon icon-' + this.state.playState}></div>

                <Sound url={honksound}
                       onFinishedPlaying={(e) => this.handleFinishedPlaying()}
                       onPlaying={(e) => this.handlePlaying(e)}
                       onLoading = {(e) => this.handleLoading(e)}
                       playStatus={this.state.playState} loop={false}
                       volume={50}
                />
            </div>
        )
            ;
    }

}

export default AudioPlayer;