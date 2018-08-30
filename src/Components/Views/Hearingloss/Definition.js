import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

export const Definition = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.hearingloss.definition.title" />
        </h1>
        <p>
            <FormattedMessage id="app.hearingloss.definition.intro" />
        </p>

        <div>
            <Link to="/types">
                <button>
                    <FormattedMessage id="app.hearingloss.definition.button.type" />
                </button>
            </Link>
            <Link to="/cause">
                <button>
                    <FormattedMessage id="app.hearingloss.definition.button.cause" />
                </button>
            </Link>
            <Link to="/degree">
                <button>
                    <FormattedMessage id="app.hearingloss.definition.button.degrees" />
                </button>
            </Link>
        </div>
    </Fragment>
);