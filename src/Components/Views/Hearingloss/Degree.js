import React, {Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import NormalDegreeImg from '../../../Files/Images/BF_Exp_Degree_Normal.png';

export const Degree = () => (
    <Fragment>
        <div className="item-main">
            <h1>
                <FormattedMessage id="app.hearingloss.degree.title"/>
            </h1>
            <p>
                <FormattedMessage id="app.hearingloss.degree.intro"/>
            </p>
        </div>
        <div className="item-side">
            <img alt="normal hearing" src={NormalDegreeImg} />
        </div>
    </Fragment>
);
