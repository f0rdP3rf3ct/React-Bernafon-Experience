import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.css';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import MainMenu from '../MainMenu/MainMenu';
import imgBernafonLayer from '../../Files/Images/BernafonLayer.svg';

const BernafonLayer = () => {
    return <img alt='bernafon layer' className={ styles.bernafonLayer } src={ imgBernafonLayer }/>
 };

const Header = ({ onChangeLanguage }) => (
    <header className={ styles.header }>
        <div className={ styles.headerNavigation }>
            <BernafonLayer/>
            <MainMenu onChangeLanguage={ onChangeLanguage }/>
        </div>
        <div>S
            <div className={ styles.breadcrumbWrapper }>
                <Breadcrumbs/>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    onChangeLanguage: PropTypes.func,
};

export default Header;