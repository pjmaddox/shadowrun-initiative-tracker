import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TurnAndPassButton extends Component {
    render() {
        return (
            <div className="turnAndPassButtonContainer row right">
                <div className="col-sm-6 col-md-3 right">
                    <button className="newTurnButton" onClick={() => { this.props.onNewTurnClick(); }}>New Turn</button>
                </div>
                <div className="col-sm-6 col-md-3 right">
                    <button className="newPassButton" onClick={() => { this.props.onNewPassClick(); }}>New Pass</button>
                </div>
            </div>
        );
    }
}

TurnAndPassButton.propTypes = {
    onNewTurnClick: PropTypes.func.isRequired,
    onNewPassClick: PropTypes.func.isRequired
}