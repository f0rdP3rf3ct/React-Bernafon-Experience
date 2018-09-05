import React, {Component, Fragment} from 'react';
import {FormattedMessage, FormattedHTMLMessage} from 'react-intl';
import styles from './Hearingloss.module.scss';

export class Types extends Component {

    state = {
        displayedText: 'intro'
    };

    handleOnClick = (typeSuffix, event) => {

        // Assign active class and assgin new text to state
        event.currentTarget.classList.add(styles.active);

        if (typeof this.prevButtonElement !== 'undefined') {
            if (event.currentTarget !== this.prevButtonElement) {
                this.prevButtonElement.classList.remove(styles.active);
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
                <div className={styles['container-60-40']}>

                    <div className={styles.itemMain}>
                        <h1 className={styles.mainTitle}>
                            <FormattedMessage id="app.hearingloss.types.title"/>
                        </h1>
                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id={'app.hearingloss.types.text.' + this.state.displayedText}/>
                        </p>
                    </div>
                    <div className={styles.itemSide}>
                        <ul className={styles.nonDectoratedList}>
                            <li className={styles.listItem}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('sensorineural', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.sensorineural"/>
                                </button>
                            </li>
                            <li className={styles.listItem}>
                                <button className={styles.textButton}
                                        onClick={(e) => this.handleOnClick('conductive', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.conductive"/>
                                </button>
                            </li>
                            <li className={styles.listItem}>
                                <button className={styles.textButton} onClick={(e) => this.handleOnClick('mixed', e)}>
                                    <FormattedMessage id="app.hearingloss.types.button.mixed"/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        )
    }
};
