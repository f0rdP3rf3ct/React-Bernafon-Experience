import React from 'react';
import {injectIntl, intlShape} from "react-intl";

import bananaImage_en from "../../Files/Images/bf_exp_speechbanana_EN.png";
import bananaImage_de from "../../Files/Images/bf_exp_speechbanana_DE.png";
import bananaImage_fr from "../../Files/Images/bf_exp_speechbanana_FR.png";
import bananaImage_es from "../../Files/Images/bf_exp_speechbanana_ES.png";
import styles from "./SpechBanana.module.css";

const imgMappings = {
    "EN": bananaImage_en,
    "DE": bananaImage_de,
    "FR": bananaImage_fr,
    "ES": bananaImage_es
};

const SpeechBanana = ({intl}) => {
    return <img className={styles.bananaImage} alt="speechbanana" width="100%" src={imgMappings[intl.locale]}/>
};

SpeechBanana.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(SpeechBanana);
