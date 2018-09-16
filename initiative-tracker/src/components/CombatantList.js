import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCombatant from './SingleCombatant';
import _ from 'lodash';

export default class CombatantList extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfCombatants: [  ] };
    }
    render() {
        let list = _.map(this.state.listOfCombatants, (x, index) => {
            return (<div className="row" key={index}><SingleCombatant  
                id={index}
                name={x.name}
                currentInitiative={x.currentInitiative}
                hasGoneThisPass={x.hasGoneThisPass}
                isDead={x.isDead}
                initiativeValueUpdateFunction={(newValue) => { this.props.initiativeValueUpdateFunction(x.id, newValue) }}
                isDeadToggleFunction={() => { this.props.isDeadToggleFunction(x.id); }}
                togglePassFunction={() => { this.props.hasGoneToggleFunction(x.id); }}
                removeCombatantFunction={() => { this.props.removeCombatantFunction(x.id); }}
        /></div>);
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="combatantListContainer col-sm-12">
                        {list}
                    </div>
                </div>
                <div className="row">
                    <div className="combatantListControls col-sm-12">
                        <div className="row">
                            <div className="col-sm-6">
                                <button id="clearAllButton" onClick={ (e) => { this.props.clearAllCallbackFunction(); } }>Clear All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CombatantList.propTypes = {
    listOfCombatants: PropTypes.array,
    clearAllCallbackFunction: PropTypes.func.isRequired,
    initiativeValueUpdateFunction: PropTypes.func.isRequired,
    isDeadToggleFunction: PropTypes.func.isRequired,
    togglePassFunction: PropTypes.func.isRequired,
    removeCombatantFunction: PropTypes.func.isRequired


}