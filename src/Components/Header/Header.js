import React from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './Header.module.css';
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs";
import imgBernafonLayer from "../../Files/Images/BernafonLayer.svg";
import {Link} from "react-router-dom";


const BernafonLayer = () => {
    return <img alt="bernafon layer" className={styles.bernafonLayer} src={imgBernafonLayer}/>
};

const MainMenu = ({onChangeLanguage}) => (
    <div>

        <Link to="/">
            <button className={styles.homeButton}>h</button>
        </Link>

        {/*TODO: Make this go back in  app history not in browser*/}
        <button className={styles.backButton} onClick={() => (window.history.back())}>i</button>

        <div className={styles.languageSelector}>
            <button className={styles.languageButton} onClick={() => onChangeLanguage('EN')}>
                <FormattedMessage id="app.navigation.language.en"/>
            </button>

            <button className={styles.languageButton} onClick={() => onChangeLanguage('DE')}>
                <FormattedMessage id="app.navigation.language.de"/>
            </button>
        </div>
    </div>
);

const Header = ({onChangeLanguage}) => (
    <header className={styles.header}>
        <div className={styles.headerNavigation}>
            <BernafonLayer/>
            <MainMenu onChangeLanguage={onChangeLanguage}/>
        </div>

        <div>
            <div className={styles.breadcrumbWrapper}>
                <Breadcrumbs/>
            </div>
        </div>
    </header>
);

export default Header;