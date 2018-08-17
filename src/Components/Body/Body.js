import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Body.css';

class Body extends Component {

    render() {
        return (
            <div className="AppBody">
                <AudioPlayer id="player-1" />
                <AudioPlayer id="player-2" />
            </div>
        );
    }
}


export default Body;