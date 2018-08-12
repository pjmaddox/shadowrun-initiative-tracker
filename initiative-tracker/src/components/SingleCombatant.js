import React, { Component } from "react";
import PropTypes from "prop-types";

class SingleCombatant extends Component {
    render() {
        return (
            <div className="combatantContainer">
                
            </div>
        );
    }
}

SingleCombatant.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initiativeValueUpdateFunction: PropTypes.func.isRequired,
    isDeadToggleFunction: PropTypes.func.isRequired,
    togglePassFunction: PropTypes.func.isRequired,
    removeCombatantFunction: PropTypes.func.isRequired
};

export default SingleCombatant;