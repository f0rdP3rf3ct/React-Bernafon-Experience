import React, {Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import {Link} from "react-router-dom";

export const About = () => (
    <Fragment>
        <div className="item-main">
            <h1>
                <FormattedMessage id="app.about.title"/>
            </h1>
            <p>
                <FormattedHTMLMessage id="app.about.intro"/>
            </p>
        </div>
        <div className="item-side">
            <Link to="/hearingloss/definition" className="button-style">
                <FormattedMessage id="app.about.button.definition"/>
            </Link>
            <Link to="/simulator" className="button-style">
                <FormattedMessage id="app.about.button.simulator"/>
            </Link>
        </div>
    </Fragment>
);
