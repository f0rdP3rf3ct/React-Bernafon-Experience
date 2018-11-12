import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';

import simImageEN from '../../Files/Images/bf_exp_simulator_audiogram_blank_EN.svg';
import simImageDE from '../../Files/Images/bf_exp_simulator_audiogram_blank_DE.svg';
import simImageFR from '../../Files/Images/bf_exp_simulator_audiogram_blank_FR.svg';
import simImageES from '../../Files/Images/bf_exp_simulator_audiogram_blank_ES.svg';

import sim20ImageEN from '../../Files/Images/bf_exp_simulator_audiogram_20_EN.svg';
import sim20ImageDE from '../../Files/Images/bf_exp_simulator_audiogram_20_DE.svg';
import sim20ImageFR from '../../Files/Images/bf_exp_simulator_audiogram_20_FR.svg';
import sim20ImageES from '../../Files/Images/bf_exp_simulator_audiogram_20_ES.svg';

import sim60ImageEN from '../../Files/Images/bf_exp_simulator_audiogram_60_EN.svg';
import sim60ImageDE from '../../Files/Images/bf_exp_simulator_audiogram_60_DE.svg';
import sim60ImageFR from '../../Files/Images/bf_exp_simulator_audiogram_60_FR.svg';
import sim60ImageES from '../../Files/Images/bf_exp_simulator_audiogram_60_ES.svg';

import sim80ImageEN from '../../Files/Images/bf_exp_simulator_audiogram_80_EN.svg';
import sim80ImageDE from '../../Files/Images/bf_exp_simulator_audiogram_80_DE.svg';
import sim80ImageFR from '../../Files/Images/bf_exp_simulator_audiogram_80_FR.svg';
import sim80ImageES from '../../Files/Images/bf_exp_simulator_audiogram_80_ES.svg';

const imgMappings = {
    _blank : {
      'EN' : simImageEN,
      'DE' : simImageDE,
      'FR' : simImageFR,
      'ES' : simImageES
     },
    20 : {
        'EN' : sim20ImageEN,
        'DE' : sim20ImageDE,
        'FR' : sim20ImageFR,
        'ES' : sim20ImageES
     },
    60 : {
        'EN' : sim60ImageEN,
        'DE' : sim60ImageDE,
        'FR' : sim60ImageFR,
        'ES' : sim60ImageES
     },
    80 : {
        'EN' : sim80ImageEN,
        'DE' : sim80ImageDE,
        'FR' : sim80ImageFR,
        'ES' : sim80ImageES
     }
 };

/**
 * Returns image tag depending on selected language.
 * @param { number | string } audiogram - age of audiogram to display.
 * @param { object } intl - i18n object containing currently set language
 * @returns { * } - img tag or empty string if audiogram is empty
 */
const AudiogramImage = ({ audiogram, intl }) => {

    if (audiogram !== '') {
        return <img alt='audiogram' width='100%' src={ imgMappings[ audiogram ][ intl.locale ] }/>
     }

    return '';
};

/**
 * Sets the props of the AudiogramImage-Component to required.
 * @type { { audiogram: *, intl: * } }
 */
AudiogramImage.propTypes = {
    audiogram: PropTypes.any.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(AudiogramImage);
