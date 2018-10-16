import React from 'react';
import styles from './Header.module.css';
import {Breadcrumbs} from "../Breadcrumbs/Breadcrumbs";
import {MainMenu} from "../MainMenu/MainMenu";
import imgBernafonLayer from "../../Files/Images/BernafonLayer.svg";

const BernafonLayer = () => {
    return <img alt="bernafon layer" className={styles.bernafonLayer} src={imgBernafonLayer}/>
};

const Header = ({onChangeLanguage}) => (
    <header className={styles.header}>
        <BernafonLayer/>
        <nav className={styles.navigation}>
            <MainMenu onChangeLanguage={onChangeLanguage}/>
        </nav>
        <div className={styles.breadCrumb}>
            <Breadcrumbs/>
        </div>
    </header>
);

export default Header;