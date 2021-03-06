import { ADD_COMBATANT } from '../actions/actions.js';
import { REMOVE_COMBATANT } from '../actions/actions.js';
import { CLEAR_ALL } from '../actions/actions.js';
import { UPDATE_INITIATIVE } from '../actions/actions.js';
import { TOGGLE_COMBATANT_PASS } from '../actions/actions.js';
import { NEW_PASS } from '../actions/actions.js';
import { TOGGLE_DEAD } from '../actions/actions.js';
import { NEW_ROUND } from '../actions/actions.js';
import _ from "lodash";
import { combineReducers } from "redux";

const INITIAL_STATE = {
    combatants: [  ],
    currentPassCount: 0
};

const combatants = (previousCombatantState = [], action) => {
    if(action === undefined || action.type === undefined)
        return previousCombatantState;

    let arrayCopy;

    switch(action.type) {
        case ADD_COMBATANT:
            return _.concat(previousCombatantState, action.payload.newCombatantObject);
            break;
        case REMOVE_COMBATANT:
            return _.filter(previousCombatantState, (val, index) => { return index != action.payload.targetIndex });
            break;    
        case CLEAR_ALL:
            return [];
            break;
        case TOGGLE_DEAD:
            arrayCopy = previousCombatantState.slice(0);
            arrayCopy[action.targetCombatantId].isDead = !arrayCopy[action.targetCombatantId].isDead;
            return arrayCopy;
            break;
        case TOGGLE_COMBATANT_PASS:
            arrayCopy = previousCombatantState.slice(0);
            arrayCopy[action.targetCombatantId].hasGoneThisPass = !arrayCopy[action.targetCombatantId].hasGoneThisPass;
            return arrayCopy;
            break;
        case UPDATE_INITIATIVE:
            arrayCopy = previousCombatantState.slice(0);
            arrayCopy[action.targetCombatantId].currentInitiative = action.newInitiativeValue;
            return arrayCopy;
            break;
        case NEW_PASS:
            return _.map(previousCombatantState, (currentCombatantObject) => {
                let newInitiative = currentCombatantObject.currentInitiative - 10;
                newInitiative = (newInitiative < 0)? 0 : newInitiative;
                let shouldGetTurnthisPass = (newInitiative > 0);
                return {
                    ...currentCombatantObject,
                    hasGoneThisPass: shouldGetTurnthisPass,
                    currentIniviative: newInitiative
                }
            });
            break;
        default:
            return previousCombatantState;
    }
};

const currentPass = (previousCurrentPass = 0, action) => {
    switch(action.type) {
        case NEW_ROUND:
            return 0;
            break;
        case NEW_PASS:
            return ++previousCurrentPass;
            break;
        default:
            return previousCurrentPass;
    }
}

export default combineReducers({
    combatants,
    currentPass
});