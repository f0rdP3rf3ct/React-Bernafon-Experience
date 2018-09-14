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

    /**
     * Toggle Soundstate and pass self to parent when player changes to PLAY
     */
    handleSoundState = () => {
        // Inform parent that this instance started playing
        if (this.state.playState === 'PAUSED') {
            // Notify collection that player started playing
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
        // Set state to pause if its not already.
        if(this.state.playState !== 'PAUSED') {
            this.setState({playState : 'PAUSED'})
        }

        // Call parent callback if state switched to PAUSE
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
                    onLoad={(e) => this.handleLoad(e)}
                    onPause={(e) => this.handlePause(e)}
                    playStatus={
                        this.props.onActiveCollection === false || this.props.isActivePlayer === false ? 'PAUSED' : this.state.playState
                    }
                    volume={this.props.volume}
                    autoLoad={true}
                />
            </div>
        );
    }
}

export default AudioPlayer;