import React from 'react';
import AudioPlayer from '../AudioPlayer/AudioPlayer';
import './Body.css';

const Body = () => (
    <div className="appBody">
        <AudioPlayer id="player-1" />
        <AudioPlayer id="player-2" />
    </div>
);

export default Body;