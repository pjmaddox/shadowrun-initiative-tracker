import React, { Component } from "react";
import PropTypes from "prop-types";

export default class PassCounter extends Component{
    render() {
        return (
            <div className="PassCounterContainer">
                Current Pass: { this.props.passCount }
            </div>
        );
    }
}

PassCounter.propTypes = {
    passCount: PropTypes.number
};