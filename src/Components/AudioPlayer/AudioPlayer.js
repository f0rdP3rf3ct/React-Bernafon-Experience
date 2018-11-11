import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Sound from 'react-sound';
import styles from './AudioPlayer.module.css';

/**
 * PlayState Component.
 * Renders tag with indicator if audio is playing or not.
 * @param { object } props - Component props
 * @returns { * } - div tag containig a 'PLAY' or 'PAUSE' Icon respectively
 */
export const PlayState = (props) => {
    const isPlaying = props.isPlaying;

    if (isPlaying === 'PAUSED') {
        return <div onClick={ props.onClick } className={ styles.iconPaused }/>
     }

    return <div onClick={ props.onClick } className={ styles.iconPlaying }/>
 };

/**
 * Props validation
 */
PlayState.propTypes = {
    isPlaying: PropTypes.any.isRequired,
    onClick: PropTypes.any.isRequired
};

/**
 * Audioplayer Component
 * Combines Playstate and Sound Component and handles audiofile position
 */
class AudioPlayer extends Component {

    state = {
        position: 0 // Position of audiofile in MS
     };

    /**
     * Pass reference of self to parent when state changes to 'PLAY'.
     * @param { object } target - reference to this component
     * @param { object } e - event object
     */
    handleSoundState = (target, e) => {
        this.props.onClick(target, e);
     };

    /**
     * Store position of audiofile
     * @param { object } e - event object
     */
    handlePause = (e) => {
        // Set state to pause if its not already.
        this.setState({ position: e.position });
     };

    /**
     * Starts playing from position
     * @param { object } e - event object
     */
    handlePlaying = (e) => {
        this.setState({ position: e.position })
     };

    render() {
        return (
            <Fragment>
                { /* Reflect playstate */ }
                <PlayState isPlaying={ this.props.playState } onClick={ (e) => this.handleSoundState(this, e) }/>

                <Sound
                    url={ this.props.audiofile }
                    position={ this.state.position }
                    onPause={ (e) => this.handlePause(e) }
                    onPlaying={ (e) => this.handlePlaying(e) }
                    volume={ this.props.volume }
                    autoLoad={ true }
                    loop={ true }
                    playStatus={ this.props.playState }
                />
            </Fragment>
        );
     }
 }

/**
 * Props validation
 */
AudioPlayer.propTypes = {
    playState: PropTypes.any.isRequired,
    audiofile: PropTypes.any.isRequired,
    volume: PropTypes.any.isRequired,
    onClick:PropTypes.any.isRequired
};

export default AudioPlayer;