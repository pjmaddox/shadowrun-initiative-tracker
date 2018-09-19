import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';
import { clearAll, updateInitiative, toggleDead, toggleCombatantPass, removeCombatant } from "../../stores/actions/actions.js";

const getOrderedCombatants = (currentStateOrder) => {
    return _.sortBy(currentStateOrder, [ (o) => { return o.isDead; }, (o) => { return o.hasGoneThisPass; }, (o) => { return -o.currentInitiative } ], 'asc');
};

const mapStateToProps = state => {
    return {
        listOfCombatants: getOrderedCombatants(state.combatants),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        clearAllCallbackFunction: () => {dispatch(clearAll())},
        initiativeValueUpdateFunction: (id, newValue) => dispatch(updateInitiative(id, newValue)),
        isDeadToggleFunction: (id) => { dispatch(toggleDead(id)); },
        togglePassFunction: (id) => { dispatch(toggleCombatantPass(id)); },
        removeCombatantFunction: (id) => { dispatch(removeCombatant(id)); }
    }
};

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;