import CombatantAdd from "../CombatantAddTextBox.js";
import { connect } from "react-redux";
import { addCombatant } from "../../stores/actions/actions.js";


const mapStateToProps = state => {
    return {  };
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmitFunction: (newName) => { dispatch(addCombatant(newName)); }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CombatantAdd);