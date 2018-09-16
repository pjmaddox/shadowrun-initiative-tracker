import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';
import { clearAll } from "../../stores/actions/actions.js";

const getOrderedCombatants = (currentStateOrder) => {
    return _.sortBy(this.props.listOfCombatants, [ (o) => { return o.isDead; }, (o) => { return o.hasGoneThisPass; }, (o) => { return -o.currentInitiative } ], 'asc');
};

const mapStateToProps = state => ({
    listOfCombatants: getOrderedCombatants(state.CombatantList)
});

const mapDispatchToProps = dispatch => ({
    clearAllCallbackFunction: () => dispatch(clearAll())
});

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;