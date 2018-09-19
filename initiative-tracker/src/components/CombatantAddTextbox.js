import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CombatantAddTextBox extends Component {
    constructor(props) {
        super(props);
        this.state = { currentText: "" };
    }
    componentDidMount() {
        this.setState({ currentText: "" });
    }
    updateText(newValue) {
        this.setState({ currentText: newValue });
    }
    submitAdd() {
        this.props.onSubmitFunction(this.state.currentText);
        this.setState({currentText: ""});
    }
    render () {
        return (
            <div className="combatantAddTextBoxContainer">
                <input type="textbox" value={this.state.currentText} onChange={(event) => { this.updateText(event.target.value); }} onSubmit={(event) => { this.submitAdd(); }}/><button onClick={(event) => { this.submitAdd(); }}>Add</button>
            </div>
        );
    }
};

CombatantAddTextBox.propTypes = {
    onSubmitFunction: PropTypes.func.isRequired
};