import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../Header/Header.module.css';
import { FormattedMessage } from 'react-intl';

const MainMenu = ({ onChangeLanguage }) => {

    if(window.location.pathname === '/') {
        return <div>
            <div className={ styles.languageSelector }>
                <button className={ styles.languageButton } onClick={ () => onChangeLanguage('EN') }>
                    <FormattedMessage id='app.navigation.language.en'/>
                </button>

                <button className={ styles.languageButton } onClick={ () => onChangeLanguage('DE') }>
                    <FormattedMessage id='app.navigation.language.de'/>
                </button>

                <button className={ styles.languageButton } onClick={ () => onChangeLanguage('FR') }>
                    <FormattedMessage id='app.navigation.language.fr'/>
                </button>

                <button className={ styles.languageButton } onClick={ () => onChangeLanguage('ES') }>
                    <FormattedMessage id='app.navigation.language.es'/>
                </button>
            </div>
        </div>
     }

    return <div>
        <Link to='/'>
            <button className={ styles.homeButton }>h</button>
        </Link>

        { /*TODO: Make this go back in  app history not in browser*/ }
        <button className={ styles.backButton } onClick={ () => (window.history.back()) }>i</button>

        <div className={ styles.languageSelector }>
            <button className={ styles.languageButton } onClick={ () => onChangeLanguage('EN') }>
                <FormattedMessage id='app.navigation.language.en'/>
            </button>

            <button className={ styles.languageButton } onClick={ () => onChangeLanguage('DE') }>
                <FormattedMessage id='app.navigation.language.de'/>
            </button>

            <button className={ styles.languageButton } onClick={ () => onChangeLanguage('FR') }>
                <FormattedMessage id='app.navigation.language.fr'/>
            </button>

            <button className={ styles.languageButton } onClick={ () => onChangeLanguage('ES') }>
                <FormattedMessage id='app.navigation.language.es'/>
            </button>
        </div>
    </div>
 };

MainMenu.propTypes = {
    onChangeLanguage: PropTypes.func,
};

export default MainMenu;