import React, {Component} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';


class Types extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.hearingloss.cause.title'
                    />
                </h1>
                <p>
                    <FormattedHTMLMessage
                        id='app.hearingloss.cause.intro'
                    />
                </p>

            </div>
        )
    }
}

export default Types;