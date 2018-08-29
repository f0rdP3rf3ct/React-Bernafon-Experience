import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

export const About = () => (
    <Fragment>
        <h1>
            <FormattedMessage id="app.about.title" />
        </h1>
        <p>
            <FormattedMessage id="app.about.intro" />
        </p>
    </Fragment>
);
