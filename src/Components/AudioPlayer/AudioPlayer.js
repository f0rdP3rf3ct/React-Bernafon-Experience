import React, {Component, Fragment} from 'react';
import Sound from "react-sound";
import styles from './AudioPlayer.module.css';

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
        position: 0,
        loading: true
    };

    /**
     * Toggle Soundstate and pass self to parent when player changes to PLAY
     */
    handleSoundState = (target, e) => {
        this.props.onClick(target, e);
    };

    /**
     * Audio has changed to PAUSED
     * @param e
     */
    handlePause = (e) => {
        // Set state to pause if its not already.
        this.setState({position: e.position});
    };

    /**
     * Soundfile is completely loaded
     */
    handleLoad = (e) => {
        this.setState({loading: false})
    };

    handlePlaying = (e) => {
        this.setState({position: e.position})
    };

    render() {
        return (
            <Fragment>
                {/* Reflect playstate */}
                {/*<PlayState isPlaying={this.props.playState} onClick={(e) => this.handleSoundState(this, e)}/>*/}

                <Sound
                    url={this.props.audiofile}
                    position={this.state.position}
                    onLoad={(e) => this.handleLoad(e)}
                    onPause={(e) => this.handlePause(e)}
                    onPlaying={(e) => this.handlePlaying(e)}
                    volume={this.props.volume}
                    autoLoad={true}
                    loop={true}
                    playStatus={this.props.playState}
                />
            </Fragment>
        );
    }
}

export default AudioPlayer;