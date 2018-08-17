import React, { Component } from 'react';
import {FormattedMessage} from 'react-intl';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className="Header">

                <h1>
                    <FormattedMessage
                        id='app.title'
                        defaultMessage='The Bernafon experience' />
                </h1>

                <div className="LanguageSelector">

                    <button onClick={() => {
                        this.props.onChangeLanguage('EN')
                    }}>EN
                    </button>
                    <button onClick={() => {
                        this.props.onChangeLanguage('DE')
                    }}>DE
                    </button>

                </div>

            </div>
        );
    }
}

export default Header;
