import {Link} from "react-router-dom";
import styles from "../MainMenu/MainMenu.module.css";
import {FormattedMessage} from "react-intl";
import React, {Fragment} from "react";

export const MainMenu = ({onChangeLanguage}) => {

    // Don't show home Icon on Root
    if (window.location.pathname === '/') {
        return <div className={styles.languageSelector}>
                <button className={styles.languageButton} onClick={() => onChangeLanguage('EN')}>
                    <FormattedMessage id="app.navigation.language.en"/>
                </button>

                <button className={styles.languageButton} onClick={() => onChangeLanguage('DE')}>
                    <FormattedMessage id="app.navigation.language.de"/>
                </button>

                <button className={styles.languageButton} onClick={() => onChangeLanguage('FR')}>
                    <FormattedMessage id="app.navigation.language.fr"/>
                </button>

                <button className={styles.languageButton} onClick={() => onChangeLanguage('ES')}>
                    <FormattedMessage id="app.navigation.language.es"/>
                </button>
            </div>
    }

    // Show home Icon on Root
    return <Fragment>
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

            <button className={styles.languageButton} onClick={() => onChangeLanguage('FR')}>
                <FormattedMessage id="app.navigation.language.fr"/>
            </button>

            <button className={styles.languageButton} onClick={() => onChangeLanguage('ES')}>
                <FormattedMessage id="app.navigation.language.es"/>
            </button>
        </div>
    </Fragment>
};