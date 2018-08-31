import React, {Component} from 'react';
import {IntlProvider, FormattedMessage, addLocaleData} from 'react-intl';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import {Home, About, Types, Cause, Degree, Simulator, Definition} from './Components/Views';
import './CSS/Variables.css';
import './App.css';

/**
 * Lang. imports
 */
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from './Translations/de.json';
import messages_en from './Translations/en.json';
import {Breadcrumbs} from "./Components/Breadcrumbs/Breadcrumbs";

//TODO: Why is [...] used? What does it mean?
addLocaleData([...locale_en, ...locale_de]);

/**
 * Locale setup
 * @type {{locale: string, messages}}
 */
let i18nConfig = {
    locale: 'en',
    messages: messages_en
};

/**
 * Main Menu Component
 */
const MainMenu = () => (
    <div>
        <Link to="/">
            <button>
                <FormattedMessage id="app.navigation.home"/>
            </button>
        </Link>
    </div>
);

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
                    <div className="app">

                        <div className="pageContent">

                            <Header onChangeLanguage={this.handleChangeLanguage}/>

                            <header>
                                <MainMenu/>
                                <Breadcrumbs/>
                            </header>

                            <Switch>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/hearingloss" component={About}/>
                                <Route exact path="/hearingloss/types" component={Types}/>
                                <Route exact path="/hearingloss/cause" component={Cause}/>
                                <Route exact path="/hearingloss/degree" component={Degree}/>
                                <Route exact path="/hearingloss/definition" component={Definition}/>
                                <Route exact path="/hearingloss/simulator" component={Simulator}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
