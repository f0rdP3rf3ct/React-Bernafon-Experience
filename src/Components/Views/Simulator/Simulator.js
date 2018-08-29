import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import AudioPlayer from '../../AudioPlayer/AudioPlayer';

export const Simulator = () => (
    <Fragment>
        <AudioPlayer id="player-1" />
        <h1>
            <FormattedMessage id="app.simulator.types.title" />
        </h1>
        <p>
            <FormattedMessage id="app.simulator.types.intro" />
        </p>
    </Fragment>
);