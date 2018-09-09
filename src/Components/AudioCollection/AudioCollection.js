import React, {Component, Fragment} from 'react';
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import styles from './AudioCollection.module.scss';

export class AudioCollection extends Component {

    state = {
        position: 0,
        isActivePlayer: Array(3).fill(false)
    };

    /**
     * Stores position of audiofile, when player is paused
     * @param position
     */
    handleSoundState = (position) => {
        this.setState({
            position: position
        });
    };

    /**
     * Ensures that only one Audioplayer of this collection is playing.
     * @param target
     */
    onPlayerStartsPlaying = (target) => {

        const _isActivePlayer = this.state.isActivePlayer.map((isPlayer, i) => {
                const isTarget = target.props.id === 'player-' + i ? true : false
                return isTarget;
            }
        );

        this.setState({ isActivePlayer : _isActivePlayer});

        // Passes change of playState to the Simulator
        this.props.onAudioCollectionChange(this);
    };

    /**
     * Renders instance of AudioPlayer
     * @param i
     * @param audioFile
     * @returns {*}
     */
    renderAudioPlayer = (i, audioFile) => {
        return (
            <AudioPlayer id={"player-" + i}
                         isActivePlayer={this.state.isActivePlayer[i]}
                         onActiveCollection={this.props.onActiveCollection}
                         onPlayerStartsPlaying={this.onPlayerStartsPlaying}
                         playFrom={this.state.position}
                         onChange={this.handleSoundState}
                         audiofile={audioFile}/>
        )
    };

    render() {
        return (
            <Fragment>
                <div className={styles['container-25-25-25-25']}>
                    <div className={styles.itemIcon}>
                        <span className={styles[this.props.icon]}></span>
                    </div>
                    <div className={styles.itemPlayer1}>
                        {this.renderAudioPlayer(0, this.props.audiofile)}
                    </div>
                    <div className={styles.itemPlayer2}>
                        {this.renderAudioPlayer(1, this.props.audiofile)}
                    </div>
                    <div className={styles.itemPlayer3}>
                        {this.renderAudioPlayer(2, this.props.audiofile)}
                    </div>
                </div>
            </Fragment>
        )
    }
}