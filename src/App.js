import React, { Component } from 'react';
import Header from './Components/Header/Header';
import { About, Types, Cause, Degree, Simulator, Definition, Audiogram } from './Components/Views';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import './CSS/globals.fonts.css';

/**
 * Lang. imports
 */
import localeEN from 'react-intl/locale-data/en';
import localeDE from 'react-intl/locale-data/de';
import localeFR from 'react-intl/locale-data/fr';
import localeES from 'react-intl/locale-data/es';

import messagesDE from './Translations/de.json';
import messagesEN from './Translations/en.json';
import messagesFR from './Translations/fr.json';
import messagesES from './Translations/es.json';

addLocaleData([ ...localeEN, ...localeDE, ...localeFR, ...localeES ]);

/**
 * Locale setup
 * @type { { locale: string, messages } }
 */
const i18nConfig = {
    locale: 'EN',
    messages: messagesEN
 };

/**
 * App Component
 */
class App extends Component {
    state = { locale: 'EN' };

    /**
     * Change application language
     * @param { string } locale
     */
    handleChangeLanguage = (locale) => {
        switch (locale) {
            case 'EN' :
                i18nConfig.messages = messagesEN;
                break;
            case 'DE' :
                i18nConfig.messages = messagesDE;
                break;
            case 'FR' :
                i18nConfig.messages = messagesFR;
                break;
            case 'ES' :
                i18nConfig.messages = messagesES;
                break;
            default :
                i18nConfig.messages = messagesEN;
                break;
         }

        this.setState({ locale });
        i18nConfig.locale = locale;
     };

    render() {
        return (
            <IntlProvider key={ i18nConfig.locale } locale={ i18nConfig.locale } messages={ i18nConfig.messages }>
                <Router>
                    <div>
                        <Header onChangeLanguage={ this.handleChangeLanguage }/>
                        <Switch>
                            <Route exact path='/' component={ About }/>
                            <Route exact path='/audiogram' component={ Audiogram }/>
                            <Route exact path='/definition/types' component={ Types }/>
                            <Route exact path='/definition/cause' component={ Cause }/>
                            <Route exact path='/definition/degree' component={ Degree }/>
                            <Route exact path='/definition' component={ Definition }/>
                            <Route exact path='/simulator' component={ Simulator }/>
                        </Switch>
                    </div>
                </Router>
            </IntlProvider>
        );
     }
 }

export default App;
