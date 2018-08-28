import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';


class Degree extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.hearingloss.degree.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.hearingloss.degree.intro'
                    />
                </p>
            </div>
        )
    }
}

export default Degree;