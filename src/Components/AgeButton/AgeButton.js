import React, {Component, Fragment} from 'react';
import styles from "./../Views/Simulator/Simulator.module.css";

export default class AgeButton extends Component {

    state = {
        active: false
    };

    onClick = (topic, age, e) => {
        let _active = !this.state.active;
        this.setState({active: _active});
        this.props.onChange(this.props.topic, this.props.age, e)
    };

    render() {
        return (
            <Fragment>
                <button className={[
                    this.state.active ? styles.active : null,
                    styles.ageButton].join(' ')
                }
                        onClick={(e) => this.onClick(this.props.topic, this.props.age, e)}>{this.props.age}</button>
            </Fragment>
        )
    }

}