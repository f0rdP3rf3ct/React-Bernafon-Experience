import React, {Component} from 'react';
import Sound from "react-sound";
import styles from './AudioPlayer.module.scss';

/**
 * PlayState Component
 */
export const PlayState = (props) => {
    const isPlaying = props.isPlaying;

    if (isPlaying === 'PAUSED') {
        return <div onClick={props.onClick} className={styles.iconPaused}/>
    }

    return <div onClick={props.onClick} className={styles.iconPlaying}/>
};


/**
 * Audioplayer
 */
class AudioPlayer extends Component {

    state = {
        playState: 'PAUSED',
        position: 0,
        loading: true
    };

    componentDidMount() {
        const selector = `audioPlayer ${this.props.id}`;
        this.progressbar = document.getElementsByClassName(selector)[0].getElementsByClassName('progress')[0];
    }

    /**
     * Toggle Soundstate
     */
    handleSoundState = () => {
        // Inform parent that this instance started playing
        if(this.state.playState === 'PAUSED') {
            this.props.onPlayerStartsPlaying(this);
        }

        const playState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
        this.setState({playState});
    };

    /**
     * Audio has changed to PAUSED
     * @param e
     */
    handlePause = (e) => {
        this.props.onChange(e.position, this);
    };

    /**
     * Soundfile is completely loaded
     */
    handleLoad = () => {
        this.setState({loading: false})
    };

    render() {
        return (
            <div className={`audioPlayer ${this.props.id}`}>

                {/* Reflect playstate */}
                <PlayState isPlaying={this.state.playState} onClick={this.handleSoundState}/>

                <Sound
                    url={this.props.audiofile}
                    playFromPosition={this.props.playFrom}
                    onPause={(e) => this.handlePause(e)}
                    onLoad={(e) => this.handleLoad(e)}
                    playStatus={this.state.playState}
                    volume={this.props.volume}
                />
            </div>
        );
    }
}

export default AudioPlayer;