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
            position: 0,
            loading: true
        };

        this.id = this.props.id;
    }

    componentDidMount() {
        let selector = 'AudioPlayer ' + this.id;
        this.progressbar = document.getElementsByClassName(selector)[0].getElementsByClassName('Progress')[0];
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
     */
    handleSoundState = () => {
        let newState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
        this.setState({playState: newState});
    };

    /**
     * Handles actions while the file is playing
     * @param e
     */
    handlePlaying = (e) => {

        // TODO: Solve this - Catches if soundfile has finished playing. This is a workaround, because onFinishedPlaying does not fire along with autload. react-sound issue.
        let pos = Number(e.position);

        if (pos >= this.state.duration) {

            this.setState({
                playState: 'PAUSED',
                position: 0
            });

        } else {

            this.setState({position: Number(e.position)});
            this.progressbar.value = e.position;

        }
    };

    /**
     * Range-Slider MouseDown
     * @param e
     */
    handleMouseDown = (e) => {
        if (this.state.playState === 'PLAYING') {
            this.setState({playState: 'PAUSED'});
        }
    };

    /**
     * Range-Slider MouseUp
     * @param e
     */
    handleChange = (e) => {
        let playPos = Number(e.target.value);
        this.setState({position: playPos});
    };

    /**
     * Handle completed file load
     * @param e
     */
    handleLoading = (e) => {
        this.setState({duration: e.duration});
    };

    /**
     * Soundfile is completely loaded
     */
    handleLoad = (e) => {
        this.setState({loading: false})
    };

    render() {
        return (
            <div className={"AudioPlayer " + this.props.id}>

                {/* Reflects loading process */}
                {this.state.loading === true ? <h1>Loading...</h1> : null }

                {/*Reflects information state*/}
                <div className="Information">
                    <p>{this.convertMSToFormattedString(this.state.position)}</p>
                </div>

                {/*Reflects position of track*/}
                <input onChange={this.handleChange}
                       onMouseDown={this.handleMouseDown}
                       min="0"
                       max={this.state.duration}
                       className="Progress"
                       type="range" />

                {/* Reflect playstate */}
                <div onClick={this.handleSoundState} className={'icon icon-' + this.state.playState} />

                <Sound url={honksound}
                       position={this.state.position}
                       onPlaying={(e) => this.handlePlaying(e)}
                       onLoading={(e) => this.handleLoading(e)}
                       onLoad={(e) => this.handleLoad(e)}
                       playStatus={this.state.playState}
                       volume={50}
                       autoLoad={true}
                />
            </div>
        );
    }

}

export default AudioPlayer;