import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from "react-router-dom";


class Home extends Component {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id='app.home.title'
                    />
                </h1>
                <p>
                    <FormattedMessage
                        id='app.home.intro'
                    />
                </p>

                <div>
                    <Link to="/About">
                        <button>
                            <FormattedMessage
                                id='app.home.button.about'
                            />
                        </button>
                    </Link>
                    <Link to="/Simulator">
                        <button>
                            <FormattedMessage
                                id='app.home.button.simulator'
                            />
                        </button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default Home;