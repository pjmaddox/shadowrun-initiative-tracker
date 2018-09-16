import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';
import { clearAll } from "../../stores/actions/actions.js";

const mapStateToProps = state => ({
    listOfCombatants: state.CombatantList,
});

const mapDispatchToProps = dispatch => ({
    clearAllCallbackFunction: () => dispatch(clearAll())
});

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;