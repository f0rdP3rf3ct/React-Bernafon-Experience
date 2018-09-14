import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import img_mildhearing from '../../../Files/Images/bf_exp_img_mildhearing.png';
import img_moderatehearing from '../../../Files/Images/bf_exp_img_moderatehearing.png';
import img_normalhearing from '../../../Files/Images/bf_exp_img_normalhearing.png';
import img_profoundhearing from '../../../Files/Images/bf_exp_img_profoundhearing.png';
import styles from './Hearingloss.module.scss';
import {Link} from "react-router-dom";


export class Degree extends Component {

    state = {
        text: 'normalhearing',
        image: img_normalhearing
    };

    componentDidMount = () => {

        const initialSelection = 'normalhearing';

        // Define initial selection
        let btnElement = document.getElementById(initialSelection);
        btnElement.classList.add(styles.active);
        this.prevButtonElement = btnElement;
    };

    handleOnClick = (type, event) => {

        // Assign active class and new text to state
        //TODO: Refactor - is duplicated code of Types.js
        event.currentTarget.classList.add(styles.active);

        if (typeof this.prevButtonElement !== 'undefined') {
            if (event.currentTarget !== this.prevButtonElement) {
                this.prevButtonElement.classList.remove(styles.active);
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

                <div className={styles['container-60-40']}>


                    <div className={styles.itemMain}>

                        <Link to="/audiogram" className={styles.mainButton}>
                            <FormattedMessage id="app.hearingloss.degree.button.audiogram"/>
                        </Link>

                        <h1>
                            <FormattedMessage id="app.hearingloss.degree.title"/>
                        </h1>

                        <div className={styles['container-50-50']}>
                            <div className={styles.itemMain}>
                                <ul className={styles.nonDectoratedList}>
                                    <li className={styles.listItem}>
                                        <button id="normalhearing" className={styles.textButton}
                                                onClick={(e) => this.handleOnClick('normalhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.normalhearing"/>
                                        </button>

                                    </li>
                                    <li className={styles.listItem}>
                                        <button id="mildhearing" className={styles.textButton}
                                                onClick={(e) => this.handleOnClick('mildhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.mildhearing"/>
                                        </button>
                                    </li>
                                    <li className={styles.listItem}>
                                        <button id="moderatehearing" className={styles.textButton}
                                                onClick={(e) => this.handleOnClick('moderatehearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.moderatehearing"/>
                                        </button>
                                    </li>
                                    <li className={styles.listItem}>
                                        <button id="profoundhearing" className={styles.textButton}
                                                onClick={(e) => this.handleOnClick('profoundhearing', e)}>
                                            <FormattedHTMLMessage id="app.hearingloss.degree.button.profoundhearing"/>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.itemSide}>
                                <h1 className={styles.mainTitle}>
                                    <FormattedHTMLMessage id={"app.hearingloss.degree.title." + this.state.text}/>
                                </h1>
                                <p className={styles.mainParagraph}>
                                    <FormattedHTMLMessage id={"app.hearingloss.degree.text." + this.state.text}/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.itemSide}>
                        <img width="100%" alt="normal hearing" src={this.state.image}/>
                    </div>
                </div>

            </Fragment>
        )
    }
}