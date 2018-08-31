import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";

export const About = () => (
    <Fragment>
        <div className="container-60-40">
            <div className="item-main">
                <h1>
                    <FormattedMessage id="app.about.title"/>
                </h1>
                <p>
                    <FormattedHTMLMessage id="app.about.intro"/>
                </p>
            </div>
            <div className="item-side">
                <Link to="/hearingloss/definition" className="main-button">
                    <FormattedMessage id="app.about.button.definition"/>
                </Link>
                <Link to="/hearingloss/simulator" className="main-button">
                    <FormattedMessage id="app.about.button.simulator"/>
                </Link>
            </div>
        </div>
    </Fragment>
);
