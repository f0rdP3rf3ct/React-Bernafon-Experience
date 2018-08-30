import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

export const Definition = () => (
    <Fragment>
        <div className="item-main">
            <h1>
                <FormattedMessage id="app.hearingloss.definition.title"/>
            </h1>
            <p>
                <FormattedMessage id="app.hearingloss.definition.intro"/>
            </p>
        </div>
        <div className="item-side">
            <div>
                <Link to="/hearingloss/types" className="button-style">
                    <FormattedMessage id="app.hearingloss.definition.button.type"/>
                </Link>
                <Link to="/hearingloss/cause" className="button-style">
                    <FormattedMessage id="app.hearingloss.definition.button.cause"/>
                </Link>
                <Link to="/hearingloss/degree" className="button-style">
                    <FormattedMessage id="app.hearingloss.definition.button.degrees"/>
                </Link>
            </div>
        </div>
    </Fragment>
);