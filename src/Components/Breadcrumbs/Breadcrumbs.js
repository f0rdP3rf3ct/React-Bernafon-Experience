import React from 'react';
import {Route} from 'react-router-dom';
import {Crumb} from './Crumb';
import styles from './Breadcrumbs.module.css';
import {FormattedMessage} from "react-intl";

export const Breadcrumbs = () =>

    <Route path="*" render={props => {

        let parts = props.location.pathname.split("/");

        // LAST ITEM
        const place = parts[parts.length - 1];
        parts = parts.slice(1, parts.length - 1);

        let transl = <FormattedMessage id={"app.crumb." + place}/>

        return <span className={styles.breadcrumb}>{parts.map(Crumb)}{transl}</span>
    }}
    />;