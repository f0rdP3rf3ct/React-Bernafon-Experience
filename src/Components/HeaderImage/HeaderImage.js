import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderImage.module.css';

const HeaderImage = (props) => (
    <Fragment>
        <div className={ styles.headerImage }></div>
        <h1 className={ styles.imgTitle }>{ props.title }</h1>
    </Fragment>
);

HeaderImage.propTypes = {
    title: PropTypes.string,
};

export default HeaderImage;