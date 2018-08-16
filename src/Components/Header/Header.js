import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import './Header.css';
import Sound from 'react-sound';
import honksound from '../../Files/Audio/sample.mp3';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state= {
            playState : 'PAUSED'
        }
    }

    /**
     * Toggle Soundstate
     * @param {string} soundState
     */
    handleSoundState = () => {
        let newState = this.state.playState === 'PLAYING' ? 'PAUSED' : 'PLAYING';
        this.setState({playState : newState});
    };

    render() {
        return (
            <div className="Header">
                <h1>
                    <FormattedMessage
                        id='app.title'
                        defaultMessage='Welcome to the bernafon experience'
                    />
                </h1>

                <button onClick={() => {this.props.onChangeLanguage('EN')}}>EN</button>
                <button onClick={() => {this.props.onChangeLanguage('DE')}}>DE</button>

                <button onClick={this.handleSoundState}>
                    <FormattedMessage
                        id='app.playSound'
                        defaultMessage='Honk!Honk! (Play audio)'
                    />
                </button>

                <Sound url={honksound} playStatus={this.state.playState} loop={false} volume={50}  />

            </div>
        );
    }
}

export default Header;
