import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Header.css';

const Header = ({ onChangeLanguage }) => (
    <div className="header">
        <h1>
            <FormattedMessage id="app.title" />
        </h1>

        <div className="languageSelector">
            <button onClick={() => onChangeLanguage('EN')}>EN</button>
            <button onClick={() => onChangeLanguage('DE')}>DE</button>
        </div>
    </div>
);

export default Header;