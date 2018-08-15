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
                        defaultMessage='Welcome to the bernafon experience'
                    />
                </h1>

                <button onClick={this.props.onChangeLanguage.bind(this, 'EN')}>EN</button>
                <button onClick={this.props.onChangeLanguage.bind(this, 'DE')}>DE</button>

            </div>
        );
    }
}

export default Header;
