import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.hearingloss.definition.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.hearingloss.definition.intro'
                    />
                </p>

                <div>
                    <Link to="/Types">
                        <button>
                            <FormattedMessage
                                id='app.hearingloss.definition.button.type'
                            />
                        </button>
                    </Link>
                    <Link to="/Cause">
                        <button>
                            <FormattedMessage
                                id='app.hearingloss.definition.button.cause'
                            />
                        </button>
                    </Link>
                    <Link to="/Degree">
                        <button>
                            <FormattedMessage
                                id='app.hearingloss.definition.button.degrees'
                            />
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Home;