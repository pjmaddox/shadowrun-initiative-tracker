//ActionTypes
export const ADD_COMBATANT = "ADD_COMBATANT";
export const REMOVE_COMBATANT = "REMOVE_COMBATANT";

//Const Values

//ActionCreators
export const addCombatant = targetCombatantId => {
    return {
        type: ADD_COMBATANT,
        payload: {
            combatantId: targetCombatantId
        }
    };
};

export const removeCombatant = targetCombatantId => {
    return {
        type: REMOVE_COMBATANT,
        payload: {
            combatantId: targetCombatantId
        }
    }
};