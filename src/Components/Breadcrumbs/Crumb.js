import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Breadcrumbs.module.scss'

export const Crumb = (part, partIndex, parts) => {

    const path = ['', ...parts.slice(0, partIndex+1)].join("/");

    return <Link className={styles.crumb} key={path} to={path} >{part}</Link>}