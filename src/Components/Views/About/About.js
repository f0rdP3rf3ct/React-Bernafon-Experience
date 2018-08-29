import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.about.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.about.intro'
                    />
                </p>
            </div>
        )
    }
}

export default Home;