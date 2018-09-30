import React from 'react';
import PropTypes from 'prop-types';
import {injectIntl, intlShape} from "react-intl";

import simImage_en from "../../Files/Images/bf_exp_simulator_audiogram_blank.svg";
import simImage_de from "../../Files/Images/bf_exp_simulator_audiogram_blank.svg";
import simImage_fr from "../../Files/Images/bf_exp_simulator_audiogram_blank.svg";
import simImage_es from "../../Files/Images/bf_exp_simulator_audiogram_blank.svg";

import sim20Image_en from "../../Files/Images/bf_exp_simulator_audiogram_20.svg";
import sim20Image_de from "../../Files/Images/bf_exp_simulator_audiogram_20.svg";
import sim20Image_fr from "../../Files/Images/bf_exp_simulator_audiogram_20.svg";
import sim20Image_es from "../../Files/Images/bf_exp_simulator_audiogram_20.svg";

import sim60Image_en from "../../Files/Images/bf_exp_simulator_audiogram_60.svg";
import sim60Image_de from "../../Files/Images/bf_exp_simulator_audiogram_60.svg";
import sim60Image_fr from "../../Files/Images/bf_exp_simulator_audiogram_60.svg";
import sim60Image_es from "../../Files/Images/bf_exp_simulator_audiogram_60.svg";

import sim80Image_en from "../../Files/Images/bf_exp_simulator_audiogram_80.svg";
import sim80Image_de from "../../Files/Images/bf_exp_simulator_audiogram_80.svg";
import sim80Image_fr from "../../Files/Images/bf_exp_simulator_audiogram_80.svg";
import sim80Image_es from "../../Files/Images/bf_exp_simulator_audiogram_80.svg";

const imgMappings = {
    _blank : {
      'EN' : simImage_en,
      'DE' : simImage_de,
      'FR' : simImage_fr,
      'ES' : simImage_es
    },
    20 : {
        'en' : sim20Image_en,
        'de' : sim20Image_de,
        'fr' : sim20Image_fr,
        'es' : sim20Image_es
    },
    60 : {
        'en' : sim60Image_en,
        'de' : sim60Image_de,
        'fr' : sim60Image_fr,
        'es' : sim60Image_es
    },
    80 : {
        'en' : sim80Image_en,
        'de' : sim80Image_de,
        'fr' : sim80Image_fr,
        'es' : sim80Image_es
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
