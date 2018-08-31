import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

export const Definition = () => (
    <Fragment>
        <div className="container-60-40">
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
                    <Link to="/hearingloss/types" className="main-button">
                        <FormattedMessage id="app.hearingloss.definition.button.type"/>
                    </Link>
                    <Link to="/hearingloss/cause" className="main-button">
                        <FormattedMessage id="app.hearingloss.definition.button.cause"/>
                    </Link>
                    <Link to="/hearingloss/degree" className="main-button">
                        <FormattedMessage id="app.hearingloss.definition.button.degrees"/>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
);