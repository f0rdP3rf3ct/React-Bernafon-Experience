import React, {Component, Fragment} from 'react';
import {FormattedMessage} from 'react-intl';
import {AudioCollection} from "../../AudioCollection/AudioCollection";
import audioSpeech from "../../../Files/Audio/discussion_sample.mp3";
import styles from './Simulator.module.scss';
import sim20Image from "../../../Files/Images/bf_exp_img_simulator_20.png";
import sim40Image from "../../../Files/Images/bf_exp_img_simulator_40.png";
import sim60Image from "../../../Files/Images/bf_exp_img_simulator_60.png";
import {HeaderImage} from "../../HeaderImage/HeaderImage";
import aboutImage from "../../../Files/Images/bf_exp_img_header_about.png";
import {Link} from "react-router-dom";


export class Simulator extends Component {

    state = {
        audioCollections: Array(3).fill(null),
        audiogram: sim20Image
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
    onAudioCollectionChange = (target, player) => {
        const isActiveCollection = this.state.audioCollections.slice();

        for (var i = 0; i < isActiveCollection.length; i++) {
            if (i !== target.props.index) {
                isActiveCollection[i] = false
            } else {
                isActiveCollection[i] = true;
            }
        }

        switch (player.props.id) {
            case 'player-0':
                this.setState({audiogram: sim20Image});
                break;
            case 'player-1':
                this.setState({audiogram: sim40Image});
                break;
            case 'player-2':
                this.setState({audiogram: sim60Image});
                break;
        }

        this.setState({audioCollections: isActiveCollection});

    };

    render() {
        return (
            <Fragment>

                <HeaderImage imgUrl={aboutImage} alt={"About Hearing"} title={<FormattedMessage id="app.simulator.title"/>} />

                <Link to="/audiogram" className={styles.mainButton}>
                    <FormattedMessage id="app.hearingloss.degree.button.audiogram"/>
                </Link>

                <div className={styles['container-60-40']}>
                    <div className={styles.itemMain}>

                        <p className={styles.mainParagraph}>
                            <FormattedMessage id="app.simulator.intro"/>
                        </p>

                        <div className={styles['container-25-25-25-25']}>
                            <div className={styles.itemIcon}></div>

                            <div className={styles.itemPlayer1}>
                                <h3>
                                    <FormattedMessage id="app.simulator.age-20"/>
                                </h3>
                            </div>

                            <div className={styles.itemPlayer2}>
                                <h3>
                                    <FormattedMessage id="app.simulator.age-40"/>
                                </h3>
                            </div>

                            <div className={styles.itemPlayer3}>
                                <h3>
                                    <FormattedMessage id="app.simulator.age-60"/>
                                </h3>
                            </div>

                        </div>

                        {this.renderAudioCollection(0, "speech", audioSpeech)}
                        {this.renderAudioCollection(1, "nature", audioSpeech)}
                        {this.renderAudioCollection(2, "music", audioSpeech)}
                    </div>

                    <div className={styles.itemSide}>
                        {/*TODO: Refactor image handling*/}
                        <img width="100%" src={this.state.audiogram}/>
                    </div>

                </div>

            </Fragment>
        )
    }
}