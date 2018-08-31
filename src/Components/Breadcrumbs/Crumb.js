import React from 'react';
import {Link} from 'react-router-dom';

export const Crumb = (part, partIndex, parts) => {

    const path = ['', ...parts.slice(0, partIndex+1)].join("/");

    return <Link key={path} to={path} >/{part}</Link>}