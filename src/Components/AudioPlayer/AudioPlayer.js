import React, {Component} from 'react';
import Sound from "react-sound";
import honksound from "../../Files/Audio/sample.mp3";
import styles from './AudioPlayer.module.scss';

/**
 * PlayState Component
 */
export const PlayState = (props) =>  {
    const isPlaying = props.isPlaying;

    if(isPlaying === 'PAUSED') {
        return <div onClick={props.onClick} className={styles.iconPlaying} />
    }

    return <div onClick={props.onClick} className={styles.iconPaused} />
};


/**
 * Audioplayer
 */
class AudioPlayer extends Component {
    state = {
        playState: 'PAUSED',
        duration: '',
        position: 0,
        loading: true
    };

    componentDidMount() {
        const selector = `audioPlayer ${this.props.id}`;
        this.progressbar = document.getElementsByClassName(selector)[0].getElementsByClassName('progress')[0];
    }

    /**
     * Convers milliseconds to readable string
     * @param inms
     * @returns {string}
     */
    convertMSToFormattedString = (inms) => {
        const ms = inms % 1000;
        inms = (inms - ms) / 1000;
        const secs = inms % 60;
        inms = (inms - secs) / 60;
        const mins = inms % 60;
        const hrs = (inms - mins) / 60;

        return hrs + ':' + mins + ':' + secs;
    };

    /**
     * Toggle Soundstate
     */
    handleSoundState = () => {
        console.log('change sound state');
        const playState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
        this.setState({ playState });
    };

    /**
     * Handles actions while the file is playing
     * @param e
     */
    handlePlaying = (e) => {
        // TODO: Solve this - Catches if soundfile has finished playing. This is a workaround, because onFinishedPlaying does not fire along with autload. react-sound issue.
        let pos = Number(e.position);

        if (pos >= this.state.duration) {
            this.setState({ playState: 'PAUSED', position: 0 });
        } else {
            this.setState({ position: Number(e.position) });
            this.progressbar.value = e.position;
        }
    };

    /**
     * Range-Slider MouseDown
     * @param e
     */
    handleMouseDown = (e) => {
        if (this.state.playState === 'PLAYING') {
            this.setState({ playState: 'PAUSED' });
        }
    };

    /**
     * Range-Slider MouseUp
     * @param e
     */
    handleChange = (e) => {
        const position = Number(e.target.value);
        this.setState({ position });
    };

    /**
     * Handle completed file load
     * @param e
     */
    handleLoading = ({ duration }) => {
        this.setState({ duration });
    };

    /**
     * Soundfile is completely loaded
     */
    handleLoad = () => {
        this.setState({ loading: false })
    };

    render() {
        return (
            <div className={`audioPlayer ${this.props.id}`}>
                {/* Reflects loading process */}
                {this.state.loading === true ? <h1>Loading...</h1> : null }

                {/*Reflects information state*/}
                <div className={styles.information}>
                    <p>{this.convertMSToFormattedString(this.state.position)}</p>
                </div>

                {/*Reflects position of track*/}
                <input
                    onChange={this.handleChange}
                    onMouseDown={this.handleMouseDown}
                    min="0"
                    max={this.state.duration}
                    className="progress"
                    type="range"
                />

                {/* Reflect playstate */}
                <PlayState isPlaying={this.state.playState} onClick={this.handleSoundState} />,

                <Sound
                    url={honksound}
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