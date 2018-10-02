import React from 'react';
import {FormattedMessage} from 'react-intl';
import styles from './Header.module.css';
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs";
import {MainMenu} from "../MainMenu/MainMenu";
import imgBernafonLayer from "../../Files/Images/BernafonLayer.svg";
import {Link} from "react-router-dom";

const BernafonLayer = () => {
    return <img alt="bernafon layer" className={styles.bernafonLayer} src={imgBernafonLayer}/>
};

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