import React from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './Header.module.scss';
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs";
import imgBernafonLayer from "../../Files/Images/BernafonLayer.svg";
import {Link} from "react-router-dom";


const BernafonLayer = () => {
    return <img alt="bernafon layer" className={styles.bernafonLayer} src={imgBernafonLayer}/>
};

const MainMenu = ({onChangeLanguage}) => (
    <div>
        <Link to="/">
            <button className={styles.mainButton}>
                <FormattedMessage id="app.navigation.home"/>
            </button>
        </Link>

        <div className={styles.languageSelector}>
            <button className={styles.textButton} onClick={() => onChangeLanguage('EN')}>
                <FormattedMessage id="app.navigation.language.en"/>
            </button>

            <button className={styles.textButton} onClick={() => onChangeLanguage('DE')}>
                <FormattedMessage id="app.navigation.language.de"/>
            </button>
        </div>
    </div>
);

const Header = ({onChangeLanguage}) => (
    <div className={styles.header}>

        <div className={styles.top}>
            <BernafonLayer/>
            <MainMenu onChangeLanguage={onChangeLanguage}/>
        </div>

        <div className={styles.bottom}>
            <div className={styles.breadcrumbWrapper}>
                <Breadcrumbs/>
            </div>
        </div>

    </div>
);

export default Header;