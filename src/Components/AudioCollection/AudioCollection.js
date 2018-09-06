import React, {Component, Fragment} from 'react';
import AudioPlayer from "../AudioPlayer/AudioPlayer";
import styles from './AudioCollection.module.scss';

export class AudioCollection extends Component {

    state = {
        position: 0,
    };

    currentPlayer = undefined;

    handleSoundState = (position, target) => {
        this.setState({
            position: position
        });
    };

    onPlayerStartsPlaying = (target) => {
        if (this.currentPlayer !== undefined) {
            this.currentPlayer.setState({playState: 'PAUSED'});
        }
        this.currentPlayer = target;
    };

    render() {
        return (
            <Fragment>
                <div className={styles['container-25-25-25-25']}>
                    <div className={styles.itemIcon}>
                        <span className={styles[this.props.icon]}></span>
                    </div>
                    <div className={styles.itemPlayer1}>
                        <AudioPlayer id="player-1"
                                     volume={100}
                                     playFrom={this.state.position}
                                     onPlayerStartsPlaying={this.onPlayerStartsPlaying}
                                     onChange={this.handleSoundState}
                                     audiofile={this.props.audiofile}/>
                    </div>
                    <div className={styles.itemPlayer2}>
                        <AudioPlayer id="player-2"
                                     volume={100}
                                     playFrom={this.state.position}
                                     onPlayerStartsPlaying={this.onPlayerStartsPlaying}
                                     onChange={this.handleSoundState}
                                     audiofile={this.props.audiofile}/>
                    </div>
                    <div className={styles.itemPlayer3}>
                        <AudioPlayer id="player-3"
                                     volume={100}
                                     playFrom={this.state.position}
                                     onPlayerStartsPlaying={this.onPlayerStartsPlaying}
                                     onChange={this.handleSoundState}
                                     audiofile={this.props.audiofile}/>
                    </div>
                </div>
            </Fragment>
        )
    }
}