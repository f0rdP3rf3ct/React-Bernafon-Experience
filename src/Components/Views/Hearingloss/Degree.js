import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

export const Degree = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.hearingloss.degree.title" />
        </h1>
        <p>
            <FormattedMessage id="app.hearingloss.degree.intro" />
        </p>
    </Fragment>
);
