import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import HeaderImage from '../../HeaderImage/HeaderImage';
import introImage from '../../../Files/Images/bf_exp_img_header_about.png';

export const About = () => (
    <Fragment>
        <div className={ styles.grid }>
            <HeaderImage imgUrl={ introImage } alt={ 'About Hearing' } title={ <FormattedMessage id='app.about.title'/> }/>

            <div className={ styles.content }>
                <img className={ styles.introImage } width='100%' src={ introImage } alt='hearing-loss'/>
            </div>

            <div className={ styles.side }>
                <ul className={ styles.buttonList }>
                    <li>
                        <Link to='/definition' className={ styles.mainButton }>
                            <FormattedMessage id='app.about.button.definition'/>
                        </Link>
                    </li>
                    <li>
                        <Link to='/simulator' className={ styles.mainButton }>
                            <FormattedMessage id='app.about.button.simulator'/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </Fragment>
);
