import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router-dom';

export const Home = () => (
    <Fragment>

        <div className="item-main">
            <h1>
                <FormattedMessage id="app.home.title"/>
            </h1>
            <p>
                <FormattedHTMLMessage id="app.home.intro"/>
            </p>

        </div>

        <div className="item-side">
            <Link to="/hearingloss" className="main-button">
                <FormattedMessage id="app.home.button.start"/>
            </Link>
        </div>

    </Fragment>
);