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

                        <p className={styles.mainParagraph}>
                            <FormattedHTMLMessage id="app.hearingloss.degree.intro"/>
                        </p>

                    </div>

                    <div className={styles.itemSide}>
                        <img width="100%" alt="normal hearing" src={this.state.image}/>
                    </div>
                </div>

            </Fragment>
        )
    }
}