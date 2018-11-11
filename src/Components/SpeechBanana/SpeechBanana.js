import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import bananaImageEN from '../../Files/Images/bf_exp_speechbanana_EN.png';
import bananaImageDE from '../../Files/Images/bf_exp_speechbanana_DE.png';
import bananaImageFR from '../../Files/Images/bf_exp_speechbanana_FR.png';
import bananaImageES from '../../Files/Images/bf_exp_speechbanana_ES.png';
import styles from './SpechBanana.module.css';

const imgMappings = {
    'EN': bananaImageEN,
    'DE': bananaImageDE,
    'FR': bananaImageFR,
    'ES': bananaImageES
 };

const SpeechBanana = ({ intl }) => {
    return <img className={ styles.bananaImage } alt='speechbanana' width='100%' src={ imgMappings[ intl.locale ] }/>
 };

SpeechBanana.propTypes = {
    intl: intlShape.isRequired
 };

export default injectIntl(SpeechBanana);
