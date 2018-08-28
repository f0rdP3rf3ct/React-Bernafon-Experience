import React, {Component} from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Home from './Components/Views/Home';
import About from './Components/Views/About/About';
import './CSS/Variables.css';
import './App.css';
import {IntlProvider} from 'react-intl';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FormattedMessage} from 'react-intl';


/**
 * Lang. imports
 */
import {addLocaleData} from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';
import messages_de from './Translations/de.json';
import messages_en from './Translations/en.json';


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
const MainMenu = () => {
    return (
        <div>
            <Link to="/">
                <button>
                    <FormattedMessage
                        id='app.navigation.home'
                        defaultMessage='Translation missing'
                    />
                </button>
            </Link>
            <Link to="/About">
                <button>
                    <FormattedMessage
                        id='app.navigation.home.about'
                        defaultMessage='Translation missing'
                    />
                </button>
            </Link>
        </div>
    );
};

/**
 * App Component
 */
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            locale: 'EN'
        };
    }

    /**
     * Change application language
     * @param {string} lang
     */
    handleChangeLanguage = (lang) => {
        switch (lang) {
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

        this.setState({locale: lang});
        i18nConfig.locale = lang;
    };

    render() {

        return (
            <IntlProvider key={i18nConfig.locale} locale={i18nConfig.locale} messages={i18nConfig.messages}>
                <Router>
                    <div className="App">
                        <Header onChangeLanguage={this.handleChangeLanguage} />

                        <div className="PageContent">
                            <header>
                                <MainMenu/>
                            </header>

                            <div>
                                <Route exact path="/" component={Home}/>
                                <Route exact path="/About" component={About}/>
                            </div>
                        </div>

                        {/*<Header onChangeLanguage={this.handleChangeLanguage}/>*/}
                        {/*<Body/>*/}
                    </div>
                </Router>
            </IntlProvider>
        );
    }
}

export default App;
