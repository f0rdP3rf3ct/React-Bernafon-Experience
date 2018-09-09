import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {AudioCollection} from "../../AudioCollection/AudioCollection";
import audioSpeech from "../../../Files/Audio/discussion_sample.mp3";


export class Simulator extends Component {

    state = {
        audioCollections: Array(3).fill(null)
    };

    /**
     * Renders collection
     * @param i
     * @param icon
     * @param audioFiles
     * @returns {*}
     */
    renderAudioCollection = (i, icon, audioFiles) => {
        return (
            <AudioCollection
                index={i}
                onAudioCollectionChange={this.onAudioCollectionChange}
                onActiveCollection={this.state.audioCollections[i]}
                icon={icon}
                audiofile={audioFiles}/>
        )
    };

    /**
     * Registers changes on any of the audioCollections and sets canPlay.
     * @param target
     */
    onAudioCollectionChange = (target) => {
        const isActiveCollection = this.state.audioCollections.slice();

        for (var i = 0; i < isActiveCollection.length; i++) {
            if (i !== target.props.index) {
                isActiveCollection[i] = false
            } else {
                isActiveCollection[i] = true
            }
        }

        this.setState({audioCollections: isActiveCollection});
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

                {this.renderAudioCollection(0, "speech", audioSpeech)}
                {this.renderAudioCollection(1, "nature", audioSpeech)}
                {this.renderAudioCollection(2, "music", audioSpeech)}

            </Fragment>
        )
    }
}