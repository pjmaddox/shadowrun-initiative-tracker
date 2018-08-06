import { ADD_COMBATANT, addCombatant } from "../actions/actions.js";
import { REMOVE_COMBATANT, removeCombatant } from "../actions/actions.js";
import { CLEAR_ALL, clearAll } from "../actions/actions.js";

const INITIAL_STATE = {
    combatants: [  ]
};

//App Reducer
export const initiativeApp = (previousState = INITIAL_STATE, action) => {

    if(action === undefined || action.type === undefined)
        return previousState;
    
        switch(action.type) {
            case ADD_COMBATANT:
                break;
            case REMOVE_COMBATANT:
                break;    
            case CLEAR_ALL:
                break;
            default:
                return previousState;
        }
};