import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

export const Types = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.hearingloss.types.title" />
        </h1>
        <p>
            <FormattedMessage id="app.hearingloss.types.intro" />
        </p>
    </Fragment>
);
