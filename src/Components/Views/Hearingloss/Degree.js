import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_mildhearing from '../../../Files/Images/bf_exp_img_mildhearing.png';
import img_moderatehearing from '../../../Files/Images/bf_exp_img_moderatehearing.png';
import img_normalhearing from '../../../Files/Images/bf_exp_img_normalhearing.png';
import img_profoundhearing from '../../../Files/Images/bf_exp_img_profoundhearing.png';


export class Degree extends Component {

    state = {
        text: 'normalhearing',
        image: img_normalhearing
    };

    componentDidMount = () => {

        const initialSelection = 'normalhearing';

        // Define initial selection
        let btnElement = document.getElementById(initialSelection);
        btnElement.classList.add('active');
        this.prevButtonElement = btnElement;
    };

    handleOnClick = (type, event) => {

        // Assign active class and new text to state
        //TODO: Refactor - is duplicated code of Types.js
        event.currentTarget.classList.add('active');

        if (typeof this.prevButtonElement !== 'undefined') {
            if (event.currentTarget !== this.prevButtonElement) {
                this.prevButtonElement.classList.remove('active');
            }
        }

        this.prevButtonElement = event.currentTarget;

        let image = '';

        switch (type) {
            case 'normalhearing':
                image = img_normalhearing;
                break;
            case 'mildhearing':
                image = img_mildhearing;
                break;
            case 'moderatehearing':
                image = img_moderatehearing;
                break;
            case 'profoundhearing':
                image = img_profoundhearing;
                break;
            default:
                image = img_normalhearing;
        }

        this.setState({
            text: type,
            image: image
        });

    };

    render() {
        return (
            <Fragment>
                <div className="container-60-40">

                    <div className="item-main">
                        <h1>
                            <FormattedMessage id="app.hearingloss.degree.title"/>
                        </h1>

                        <div className="container-60-40">
                            <div className="item-main">
                                <ul>
                                    <li>
                                        <button id="normalhearing" className="main-button"
                                                onClick={(e) => this.handleOnClick('normalhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.normalhearing"/>
                                        </button>

                                    </li>
                                    <li>
                                        <button id="mildhearing" className="main-button"
                                                onClick={(e) => this.handleOnClick('mildhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.mildhearing"/>
                                        </button>
                                    </li>
                                    <li>
                                        <button id="moderatehearing" className="main-button"
                                                onClick={(e) => this.handleOnClick('moderatehearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.moderatehearing"/>
                                        </button>
                                    </li>
                                    <li>
                                        <button id="profoundhearing" className="main-button"
                                                onClick={(e) => this.handleOnClick('profoundhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.profoundhearing"/>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="item-side gradient">
                                <FormattedHTMLMessage id={"app.hearingloss.degree.text." + this.state.text}/>
                            </div>
                        </div>
                    </div>

                    <div className="item-side">
                        <img alt="normal hearing" src={this.state.image}/>
                    </div>
                </div>

            </Fragment>
        )
    }
}