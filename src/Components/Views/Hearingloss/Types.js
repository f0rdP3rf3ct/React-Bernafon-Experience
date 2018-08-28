import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';


class Types extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.hearingloss.types.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.hearingloss.types.intro'
                    />
                </p>
            </div>
        )
    }
}

export default Types;