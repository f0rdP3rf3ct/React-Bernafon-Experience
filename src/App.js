import React, {Component} from 'react';
import {IntlProvider, addLocaleData} from 'react-intl';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import {About, Types, Cause, Degree, Simulator, Definition, Audiogram} from './Components/Views';
import './CSS/globals.fonts.css';
// import styles from './App.module.css';

/**
 * Lang. imports
 */
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import locale_fr from 'react-intl/locale-data/fr';
import locale_es from 'react-intl/locale-data/es';

import messages_de from './Translations/de.json';
import messages_en from './Translations/en.json';
import messages_fr from './Translations/fr.json';
import messages_es from './Translations/es.json';


addLocaleData([...locale_en, ...locale_de, ...locale_fr, ...locale_es]);


/**
 * Locale setup
 * @type {{locale: string, messages}}
 */
let i18nConfig = {
    locale: 'EN',
    messages: messages_en
};

/**
 * App Component
 */
class App extends Component {
    state = {locale: 'EN'};

    /**
     * Change application language
     * @param {string} lang
     */
    handleChangeLanguage = (locale) => {
        switch (locale) {
            case 'EN' :
                i18nConfig.messages = messages_en;
                break;
            case 'DE' :
                i18nConfig.messages = messages_de;
                break;
            case 'FR' :
                i18nConfig.messages = messages_fr;
                break;
            case 'ES' :
                i18nConfig.messages = messages_es;
                break;
            default :
                i18nConfig.messages = messages_en;
                break;
        }

        this.setState({locale});
        i18nConfig.locale = locale;
    };

    render() {
        return (
            <IntlProvider key={i18nConfig.locale} locale={i18nConfig.locale} messages={i18nConfig.messages}>
                <Router>

                    <div>
                        <Header onChangeLanguage={this.handleChangeLanguage}/>
                        <Switch>
                            <Route exact path="/" component={About}/>
                            <Route exact path="/audiogram" component={Audiogram}/>
                            <Route exact path="/definition/types" component={Types}/>
                            <Route exact path="/definition/cause" component={Cause}/>
                            <Route exact path="/definition/degree" component={Degree}/>
                            <Route exact path="/definition" component={Definition}/>
                            <Route exact path="/simulator" component={Simulator}/>
                        </Switch>
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
