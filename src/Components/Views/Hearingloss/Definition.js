import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';


class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.about.hearingloss.title'
                        defaultMessaage='Translation missing'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.about.hearingloss.intro'
                        defaultMeassage='Translation missing'
                    />
                </p>

            </div>
        )
    }
}

export default Home;