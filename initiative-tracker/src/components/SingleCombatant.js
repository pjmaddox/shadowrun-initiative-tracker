import { Component } from "react";
import PropTypes from "prop-types";

export default class SingleCombatant extends Component {

};

SingleCombatant.propTypes = {
    id = PropTypes.number.isRequired,
    name = PropTypes.string.isRequired
};