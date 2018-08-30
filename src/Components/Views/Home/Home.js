import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const Home = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.home.title" />
        </h1>
        <p>
            <FormattedMessage id="app.home.intro" />
        </p>

        <div>
            <Link to="/about">
                <button>
                    <FormattedMessage id="app.home.button.about" />
                </button>
            </Link>

            <Link to="/simulator">
                <button>
                    <FormattedMessage id="app.home.button.simulator" />
                </button>
            </Link>
        </div>
    </Fragment>
);