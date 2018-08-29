import React, { Fragment } from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

export const Cause = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.hearingloss.cause.title" />
        </h1>
        <p>
            <FormattedHTMLMessage id="app.hearingloss.cause.intro" />
        </p>
    </Fragment>
);