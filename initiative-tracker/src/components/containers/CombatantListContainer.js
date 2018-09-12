import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';
import { newPass } from "../../stores/actions/actions.js";
import { clearAll } from "../../stores/actions/actions.js";

const mapStateToProps = state => ({
    listOfCombatants: state.CombatantList,
});

const mapDispatchToProps = dispatch => ({
    newPassCallbackFunction: () => dispatch(newPass()),
    clearAllCallbackFunction: () => dispatch(clearAll())
});

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;