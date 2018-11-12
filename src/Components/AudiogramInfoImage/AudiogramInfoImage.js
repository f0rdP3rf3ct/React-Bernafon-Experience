import React from 'react';
import { injectIntl, intlShape } from 'react-intl';

import ImageEN from '../../Files/Images/bf_exp_img_audiogram_EN.svg';
import ImageDE from '../../Files/Images/bf_exp_img_audiogram_DE.svg';
import ImageFR from '../../Files/Images/bf_exp_img_audiogram_FR.svg';
import ImageES from '../../Files/Images/bf_exp_img_audiogram_ES.svg';

const imgMappings = {
    'EN': ImageEN,
    'DE': ImageDE,
    'FR': ImageFR,
    'ES': ImageES
 };

/**
 * @param { object } intl - i18n object containing currently set language
 * @returns { * } - img tag containing an audiogram image
 */
const AudiogramInfoImage = ({ intl }) => {
    return <img alt='audiogram' style={ { padding:'2rem' } } width='500px' src={ imgMappings[ intl.locale ] }/>
 };

AudiogramInfoImage.propTypes = {
    intl: intlShape.isRequired
 };

export default injectIntl(AudiogramInfoImage);
