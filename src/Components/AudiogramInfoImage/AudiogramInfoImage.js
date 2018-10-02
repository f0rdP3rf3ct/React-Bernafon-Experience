import React from 'react';
import {injectIntl, intlShape} from "react-intl";

import Image_en from "./../../Files/Images/bf_exp_img_audiogram_EN.svg";
import Image_de from "./../../Files/Images/bf_exp_img_audiogram_DE.svg";
import Image_fr from "./../../Files/Images/bf_exp_img_audiogram_FR.svg";
import Image_es from "./../../Files/Images/bf_exp_img_audiogram_ES.svg";

const imgMappings = {
    'EN': Image_en,
    'DE': Image_de,
    'FR': Image_fr,
    'ES': Image_es
};

const AudiogramInfoImage = ({intl}) => {
    return <img alt="audiogram" style={{padding:"2rem"}} width="500px" src={imgMappings[intl.locale]}/>
};

AudiogramInfoImage.propTypes = {
    intl: intlShape.isRequired
};

export default injectIntl(AudiogramInfoImage);
