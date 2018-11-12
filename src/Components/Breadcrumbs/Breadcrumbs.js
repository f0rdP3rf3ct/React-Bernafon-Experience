import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Crumb } from './Crumb';
import styles from './Breadcrumbs.module.css';
import { FormattedMessage } from 'react-intl';

const Breadcrumbs = () =>

    <Route path='*' render={ props => {

        let parts = props.location.pathname.split('/');

        // LAST ITEM
        const place = parts[ parts.length - 1 ];
        parts = parts.slice(1, parts.length - 1);

        const transl = place !== '' ? <FormattedMessage id={ 'app.crumb.' + place }/> : '';

        return <span className={ styles.breadcrumb }>{parts.map(Crumb)}{ transl }</span>
    }  }
    />;

Breadcrumbs.propTypes = {
    location: PropTypes.string
};

export default Breadcrumbs;