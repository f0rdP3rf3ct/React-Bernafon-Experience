import React from 'react';
import {Route} from 'react-router-dom';
import {Crumb} from './Crumb';
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs = () =>

    <Route path="*" render={props => {

        let parts = props.location.pathname.split("/");

        // LAST ITEM
        const place = parts[parts.length - 1];
        parts = parts.slice(1, parts.length - 1);

        return <span className={styles.breadcrumb}>{parts.map(Crumb)}{place}</span>
    }}
    />;