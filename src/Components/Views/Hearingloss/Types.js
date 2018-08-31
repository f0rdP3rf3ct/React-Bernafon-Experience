import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';

export class Types extends Component {

    state = {
        displayedText: 'intro'
    };

    handleOnClick = (typeSuffix, event) => {

        // Assign active class and assgin new text to state
        event.currentTarget.classList.add('active');

        if (typeof this.prevButtonElement !== 'undefined') {
            if (event.currentTarget !== this.prevButtonElement) {
                this.prevButtonElement.classList.remove('active');
            }
        }

        this.prevButtonElement = event.currentTarget;

        /**
         * Change text in item main.
         */
        this.setState({
            displayedText: typeSuffix
        });

    };

    render() {
        return (
            <Fragment>
                <div className="container-60-40">

                    <div className="item-main">
                        <h1>
                            <FormattedMessage id="app.hearingloss.types.title"/>
                        </h1>
                        <p>
                            <FormattedHTMLMessage id={'app.hearingloss.types.text.' + this.state.displayedText}/>
                        </p>
                    </div>
                    <div className="item-side">
                        <button className="main-button" onClick={(e) => this.handleOnClick('sensorineural', e)}>
                            <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                        </button>
                        <button className="main-button" onClick={(e) => this.handleOnClick('conductive', e)}>
                            <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                        </button>
                        <button className="main-button" onClick={(e) => this.handleOnClick('mixed', e)}>
                            <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                        </button>
                    </div>
                </div>
            </Fragment>
        )
    }
};
