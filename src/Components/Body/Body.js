import React, { Component } from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Body.css';

class Body extends Component {

    render() {
        return (
            <div className="AppBody">
                <AudioPlayer />
            </div>
        );
    }
}


export default Body;