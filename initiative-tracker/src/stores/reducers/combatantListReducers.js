import { ADD_COMBATANT, addCombatant } from "../actions/actions.js";
import { REMOVE_COMBATANT, removeCombatant } from "../actions/actions.js";
import { CLEAR_ALL, clearAll } from "../actions/actions.js";
import _ from "lodash";

const INITIAL_STATE = {
    combatants: [  ]
};

//App Reducer
export const initiativeApp = (previousState = INITIAL_STATE, action) => {

    if(action === undefined || action.type === undefined)
        return previousState;
    
        switch(action.type) {
            case ADD_COMBATANT:
                return { ...previousState, ...{ combatants: combatants(previousState.combatants, action) } };
                break;
            case REMOVE_COMBATANT:
                return { ...previousState, ...{ combatants: combatants(previousState.combatants, action) } };
                break;    
            case CLEAR_ALL:
                return INITIAL_STATE;
                break;
            default:
                return previousState;
        }
};

export const combatants = (previousState = [], action) => {
    switch(action.type) {
        case ADD_COMBATANT:
            return _.concat(previousState.combatants, action.payload.newCombatantObject);
            break;
        case REMOVE_COMBATANT:
            return _.filter(previousState.combatants, (val, index) => { return index != action.payload.targetIndex });
            break;    
        case CLEAR_ALL:
            return [];
            break;
        default:
            return previousState;
    }
};