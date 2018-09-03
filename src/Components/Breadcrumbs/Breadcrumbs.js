import React from 'react';
import {Route} from 'react-router-dom';
import {Crumb} from './Crumb';

export const Breadcrumbs = () =>

    <Route path="*" render={props => {

        let parts = props.location.pathname.split("/");

        // LAST ITEM
        const place = parts[parts.length - 1];
        parts = parts.slice(1, parts.length - 1);

        return <p>{parts.map(Crumb)}{place}</p>
    }}
    />;