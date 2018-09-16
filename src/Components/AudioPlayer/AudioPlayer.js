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
      //  playState: 'PAUSED',
        position: 0,
        loading: true
    };

    /**
     * Toggle Soundstate and pass self to parent when player changes to PLAY
     */
    handleSoundState = (target, e) => {
       // const playState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
      //  this.setState({playState});

        this.props.onClick(target, e);
    };

    /**
     * Audio has changed to PAUSED
     * @param e
     */
    handlePause = (e) => {
        // Set state to pause if its not already.
        /*
        if(this.state.playState !== 'PAUSED') {
            this.setState({playState : 'PAUSED'})
        }
        */

        this.setState({position: e.position});
    };

    /**
     * Soundfile is completely loaded
     */
    handleLoad = () => {
        this.setState({loading: false})
    };

    render() {
        return (
            <div className={`audioPlayer`}>

                {/* Reflect playstate */}
                <PlayState isPlaying={this.props.playState} onClick={(e) => this.handleSoundState(this, e)}/>

                <Sound
                    url={this.props.audiofile}
                    playFromPosition={this.props.playFrom}
                    onLoad={(e) => this.handleLoad(e)}
                    onPause={(e) => this.handlePause(e)}
                    volume={this.props.volume}
                    autoLoad={true}
                    playStatus={this.props.playState}
                />
            </div>
        );
    }
}

export default AudioPlayer;