import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';


class HearinglossSimulator extends Component {
    render() {
        return (
            <div>
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