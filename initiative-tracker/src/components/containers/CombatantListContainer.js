import { connect } from 'react-redux';
import CombatantList from "../CombatantList.js";
import _ from 'lodash';

const mapStateToProps = state => ({
    listOfCombatants: state.CombatantList,
    clearAllCallbackFunction: __,
    newPassCallbackFunction: __
});

const mapDispatchToProps = dispatch => {

};

const CombatantListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantList);

export default CombatantListContainer;