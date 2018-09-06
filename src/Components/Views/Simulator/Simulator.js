import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {AudioCollection} from "../../AudioCollection/AudioCollection";
import audioSpeech from "../../../Files/Audio/discussion_sample.mp3";


export class Simulator extends Component {

    onAudioCollectionChange = (target) => {

    };

    render() {
        return (
            <Fragment>
                <h1>
                    <FormattedMessage id="app.simulator.types.title"/>
                </h1>
                <p>
                    <FormattedMessage id="app.simulator.types.intro"/>
                </p>

                <AudioCollection onAudioCollectionChange={this.onAudioCollectionChange} icon={"speech"} audiofile={audioSpeech}/>
                <AudioCollection onAudioCollectionChange={this.onAudioCollectionChange} icon={"nature"} audiofile={audioSpeech}/>
                <AudioCollection onAudioCollectionChange={this.onAudioCollectionChange} icon={"music"} audiofile={audioSpeech}/>

            </Fragment>
        )
    }
}