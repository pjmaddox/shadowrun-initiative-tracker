import { connect } from "react-redux";
import TurnAndPassButton from '../TurnAndPassButton.js';
import { newPass, newTurn } from "../../stores/actions/actions.js";

const mapStateToProps = () => {  };

const mapDispatchToProps = dispatch => ({
    onNewTurnClick: dispatch(() => { newTurn(); }),
    onNewPassClick: dispatch(() => { newPass(); })
});

const TurnAndPassButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TurnAndPassButton)