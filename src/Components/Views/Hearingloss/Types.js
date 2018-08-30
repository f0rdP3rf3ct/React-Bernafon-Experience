import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';

// TODO: Convert this in Component and put text in states

export const Types = () => {

    const handleOnClick = (event) => {
        /**
         * Change text in item main.
         */
    };

    return (
        <Fragment>
            <div className="item-main">
                <h1>
                    <FormattedMessage id="app.hearingloss.types.title"/>
                </h1>
                <p>
                    <FormattedMessage id="app.hearingloss.types.intro"/>
                </p>
            </div>
            <div className="item-side">
                <button className="button-style" onClick={handleOnClick}>
                    <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                </button>
                <button className="button-style" onClick={handleOnClick}>
                    <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                </button>
                <button className="button-style" onClick={handleOnClick}>
                    <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                </button>
            </div>
        </Fragment>
    )

};
