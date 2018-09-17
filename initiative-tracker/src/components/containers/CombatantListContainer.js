import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';
import { clearAll, updateInitiative, toggleDead, toggleCombatantPass, removeCombatant } from "../../stores/actions/actions.js";

const getOrderedCombatants = (currentStateOrder) => {
    return _.sortBy(currentStateOrder, [ (o) => { return o.isDead; }, (o) => { return o.hasGoneThisPass; }, (o) => { return -o.currentInitiative } ], 'asc');
};

const mapStateToProps = state => ({
    listOfCombatants: getOrderedCombatants(state.CombatantList),
});

const mapDispatchToProps = dispatch => ({
    clearAllCallbackFunction: () => dispatch(clearAll()),
    initiativeValueUpdateFunction: (id, newValue) => dispath(updateInitiative(id, newValue)),
    isDeadToggleFunction: (id) => { dispatch(toggleDead(id)); },
    togglePassFunction: (id) => { dispatch(toggleCombatantPass(id)); },
    removeCombatantFunction: (id) => { dispatch(removeCombatant(id)); }
});

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;