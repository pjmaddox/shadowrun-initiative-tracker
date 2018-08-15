import React, { Component } from "react";
import PropTypes from "prop-types";

class SingleCombatant extends Component {
    toggleHasGone() {
        this.props.togglePassFunction(this.props.id);
    }
    toggleIsDead() {
        this.props.isDeadToggleFunction(this.props.id);
    }
    updateInitiative(newValue) {
        this.props.initiativeValueUpdateFunction(this.props.id, newValue);
    }
    render() {
        return (
            <div className="combatantContainer row">
                <div className="col-sm-12">
                    <div className="row">
                        <span>{this.props.name}</span>

                        <input type="text" className="currentInitiativeDisplay" name="initiativeDisplay" value={this.props.currentInitiative} onChange={(defaultEvent) => { this.updateInitiative(defaultEvent.target.value) }}/>

                        <label for="hasGoneThisPass">Gone This Pass?</label>
                        <input type="checkbox" name="hasGoneThisPass" className="hasGoneThisPassCheckbox" checked={this.props.hasGoneThisPass} onChange={(defaultEvent) => { this.toggleHasGone(); }}/>

                        <label for="isDead">Dead?</label>
                        <input type="checkbox" name="isDead" className="toggleDeadCheckbox" checked={this.props.isDead} onChange={(event) => { this.toggleIsDead(); }}/>
                        
                        <button className="removeCombatantButton" onClick={(event) => { this.props.removeCombatantFunction(event.target.value); }}>Remove</button>
                    </div>
                </div>
            </div>
        );
    }
}

SingleCombatant.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    currentInitiative: PropTypes.number.isRequired,
    hasGoneThisPass: PropTypes.bool.isRequired,
    isDead: PropTypes.bool.isRequired,
    initiativeValueUpdateFunction: PropTypes.func.isRequired,
    isDeadToggleFunction: PropTypes.func.isRequired,
    togglePassFunction: PropTypes.func.isRequired,
    removeCombatantFunction: PropTypes.func.isRequired
};

export default SingleCombatant;