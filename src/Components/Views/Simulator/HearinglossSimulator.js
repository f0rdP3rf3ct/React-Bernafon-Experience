import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';


class HearinglossSimulator extends Component {
    render() {
        return (
            <div>
                <AudioPlayer id="player-1" />
                <h1>
                    <FormattedMessage
                        id='app.simulator.types.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.simulator.types.intro'
                    />
                </p>
            </div>
        )
    }
}

export default HearinglossSimulator;