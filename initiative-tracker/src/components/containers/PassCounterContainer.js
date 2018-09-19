import { connect } from "react-redux";
import PassCounter from "../PassCounter.js";

const mapStateToProps = state => {
    return {
        passCount: state.currentPass
    }
};

const mapDispatchToProps = dispatch => {
    return {  }
};

const PassCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PassCounter);

export default PassCounterContainer;