import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCombatant from './SingleCombatant';

export default class CombatantList extends Component {
    updateCombatantInitiative(targetId, newValue) {
        console.log("in update combatant initiative");
    }
    isDeadToggleFunction(targetId) {
        console.log("in is dead toggle");
    }
    hasGoneToggleFunction(targetId) {
        console.log("in has gone toggle");
    }
    removeCombatantFunction(targetId) {
        console.log("in remove combatant");
    }
    render() {
        let list = _.map(this.props.listOfCombatants, (x, index) => {
            return <SingleCombatant  
                key={index}
                id={index}
                name={x.name}
                currentInitiative={0}
                hasGoneThisPass={false}
                isDead={false}
                initiativeValueUpdateFunction={this.updateCombatantInitiative.bind(this)}
                isDeadToggleFunction={this.isDeadToggleFunction.bind(this)}
                togglePassFunction={this.hasGoneToggleFunction.bind(this)}
                removeCombatantFunction={this.removeCombatantFunction.bind(this)}
            />;
        });
        return (
            <div className="combatantListContainer">

            </div>
        );
    }
}
