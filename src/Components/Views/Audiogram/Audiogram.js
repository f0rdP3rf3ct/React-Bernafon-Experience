import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './Audiogram.module.css';
import {  FormattedHTMLMessage } from 'react-intl';
import topFactImg from '../../../Files/Images/bf_exp_facts_top.svg';
import bottomFactImg from '../../../Files/Images/bf_exp_facts_bottom.svg';
import AudiogramInfoImage from '../../AudiogramInfoImage/AudiogramInfoImage';

export class Audiogram extends Component {

    state = {
        show: true
     };

    render() {
        return (
            <Fragment>
                { this.props.show && (
                    <div className={ styles.interestingFact }>
                        <div className={ styles.popup }>

                            <button onClick={ this.props.onClick } className={ styles.closeButton } />

                            <div className={ styles.tableWrapper }>
                                <table className={ styles.interestingFactsTable } cellPadding='0' cellSpacing='0'>
                                    <tbody>
                                        <tr>
                                            <td className={ styles.factTop }>
                                                <img alt='fact line top' height='40px' src={ topFactImg }/>
                                            </td>
                                            <td height='20px'>
                                                <h3 className={ styles.factTitle }>
                                                    <FormattedHTMLMessage id='app.audiogram.subtitle'/>
                                                </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={ styles.factMiddle } />
                                            <td>
                                                <p className={ styles.factParagraph }>
                                                    <FormattedHTMLMessage id='app.audiogram.text'/>
                                                </p>
                                            </td>
                                            <td>
                                                <AudiogramInfoImage/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={ styles.factBottom }>
                                                <img alt='fact line bottom' height='39px' src={ bottomFactImg }/>
                                            </td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) }
            </Fragment>
        )
     }
 }

Audiogram.propTypes = {
    onClick: PropTypes.func,
    show: PropTypes.bool
};
