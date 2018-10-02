import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from "react-intl";

import simImage_en from "./../../Files/Images/bf_exp_simulator_audiogram_blank_EN.svg";
import simImage_de from "./../../Files/Images/bf_exp_simulator_audiogram_blank_DE.svg";
import simImage_fr from "./../../Files/Images/bf_exp_simulator_audiogram_blank_FR.svg";
import simImage_es from "./../../Files/Images/bf_exp_simulator_audiogram_blank_ES.svg";

import sim20Image_en from "./../../Files/Images/bf_exp_simulator_audiogram_20_EN.svg";
import sim20Image_de from "./../../Files/Images/bf_exp_simulator_audiogram_20_DE.svg";
import sim20Image_fr from "./../../Files/Images/bf_exp_simulator_audiogram_20_FR.svg";
import sim20Image_es from "./../../Files/Images/bf_exp_simulator_audiogram_20_ES.svg";

import sim60Image_en from "./../../Files/Images/bf_exp_simulator_audiogram_60_EN.svg";
import sim60Image_de from "./../../Files/Images/bf_exp_simulator_audiogram_60_DE.svg";
import sim60Image_fr from "./../../Files/Images/bf_exp_simulator_audiogram_60_FR.svg";
import sim60Image_es from "./../../Files/Images/bf_exp_simulator_audiogram_60_ES.svg";

import sim80Image_en from "./../../Files/Images/bf_exp_simulator_audiogram_80_EN.svg";
import sim80Image_de from "./../../Files/Images/bf_exp_simulator_audiogram_80_DE.svg";
import sim80Image_fr from "./../../Files/Images/bf_exp_simulator_audiogram_80_FR.svg";
import sim80Image_es from "./../../Files/Images/bf_exp_simulator_audiogram_80_ES.svg";

const imgMappings = {
    _blank : {
      'EN' : simImage_en,
      'DE' : simImage_de,
      'FR' : simImage_fr,
      'ES' : simImage_es
    },
    20 : {
        'EN' : sim20Image_en,
        'DE' : sim20Image_de,
        'FR' : sim20Image_fr,
        'ES' : sim20Image_es
    },
    60 : {
        'EN' : sim60Image_en,
        'DE' : sim60Image_de,
        'FR' : sim60Image_fr,
        'ES' : sim60Image_es
    },
    80 : {
        'EN' : sim80Image_en,
        'DE' : sim80Image_de,
        'FR' : sim80Image_fr,
        'ES' : sim80Image_es
    }
};

const AudiogramImage = ({audiogram, intl}) => {

    if (audiogram !== '') {
        return <img alt="audiogram" width="100%" src={imgMappings[audiogram][intl.locale]}/>
    }

    return '';
};

AudiogramImage.propTypes = {
    audiogram: PropTypes.any.isRequired,
    intl: intlShape.isRequired
};

export default injectIntl(AudiogramImage);
