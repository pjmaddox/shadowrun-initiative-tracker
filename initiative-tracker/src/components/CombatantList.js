import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SingleCombatant from './SingleCombatant';
import _ from 'lodash';

export default class CombatantList extends Component {
    constructor(props) {
        super(props);
        this.state = { listOfCombatants: [  ] };
    }
    componentDidMount() {
        this.handleUpdate();
    }
    handleUpdate() {
        //(o) => { return o.isDead; }, (o) => { return o.hasGoneThisPass; }, (o) => { return -o.currentInitiative }
        let correctlyOrderedData = _.sortBy(this.props.listOfCombatants, [ (o) => { return o.isDead; }, (o) => { return o.hasGoneThisPass; }, (o) => { return -o.currentInitiative } ], 'asc');
        this.setState({ listOfCombatants: correctlyOrderedData });
    }
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
        let list = _.map(this.state.listOfCombatants, (x, index) => {
            return (<div className="row" key={index}><SingleCombatant  
                id={index}
                name={x.name}
                currentInitiative={x.currentInitiative}
                hasGoneThisPass={false}
                isDead={false}
                initiativeValueUpdateFunction={this.updateCombatantInitiative.bind(this)}
                isDeadToggleFunction={this.isDeadToggleFunction.bind(this)}
                togglePassFunction={this.hasGoneToggleFunction.bind(this)}
                removeCombatantFunction={this.removeCombatantFunction.bind(this)}
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
                            <div className="col-sm-6">
                                <button id="newPassButton" onClick={(e) => { this.props.newPassCallbackFunction(); }}>New Pass</button>
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
    newPassCallbackFunction: PropTypes.func.isRequired
}