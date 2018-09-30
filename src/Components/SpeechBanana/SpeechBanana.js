import React from 'react';
import {injectIntl, intlShape} from "react-intl";

import bananaImage_en from "../../Files/Images/bf_exp_speechbanana.svg";
import bananaImage_de from "../../Files/Images/bf_exp_speechbanana.svg";
import bananaImage_fr from "../../Files/Images/bf_exp_speechbanana.svg";
import bananaImage_es from "../../Files/Images/bf_exp_speechbanana.svg";

const imgMappings = {
    "EN": bananaImage_en,
    "DE": bananaImage_de,
    "FR": bananaImage_fr,
    "ES": bananaImage_es
};

const SpeechBanana = ({intl}) => {
    return <img alt="speechbanana" width="100%" src={imgMappings[intl.locale]}/>
};

SpeechBanana.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(SpeechBanana);
