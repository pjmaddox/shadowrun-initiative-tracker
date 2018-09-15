import { connect } from "react-redux";
import PassCounter from "../PassCounter.js";

const mapStateToProps = state => ({
   passCount: state.currentPass 
});

const mapDispatchToProps = dispatch => ({
    
});

const PassCounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PassCounter);

export default PassCounterContainer;