import React, { Component } from 'react';
import Header from './Components/Header/Header';

import './App.css';
import {IntlProvider} from 'react-intl';

/**
 * Lang. imports
 */
import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from './Translations/de.json';
import messages_en from './Translations/en.json';


//TODO: Why is [...] used? What does it mean?
addLocaleData([...locale_en, ...locale_de]);

let i18nConfig = {
    locale: 'en',
    messages : messages_de
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale : 'DE'
        };

        // Event Bindings
        this.onChangeLanguage = this.onChangeLanguage.bind(this);

    }

    /**
     * Change application language
     * @param {string} lang
     */
    onChangeLanguage(lang) {

        switch (lang) {
            case 'EN' : i18nConfig.messages = messages_en; break;
            case 'DE' : i18nConfig.messages = messages_de; break;
            default : i18nConfig.messages = messages_en; break;
        }

        this.setState({locale: lang});

        i18nConfig.locale = lang;
    }

    render() {
    return (
        <IntlProvider key={ i18nConfig.locale} locale={ i18nConfig.locale } messages={ i18nConfig.messages } >
          <div className="App">
            <Header onChangeLanguage={this.onChangeLanguage} />
          </div>
        </IntlProvider>
    );
  }
}

export default App;
