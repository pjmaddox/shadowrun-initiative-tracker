//ActionTypes
export const ADD_COMBATANT = "ADD_COMBATANT";
export const REMOVE_COMBATANT = "REMOVE_COMBATANT";
export const CLEAR_ALL = "CLEAR_ALL";
export const UPDATE_INITIATIVE = "UPDATE_INITIATIVE"
export const TOGGLE_COMBATANT_PASS = "TOGGLE_COMBATANT_PASS";
export const NEW_PASS = "NEW_PASS";
export const TOGGLE_DEAD = "TOGGLE_DEAD";

//Const Values

//ActionCreators
export const addCombatant = newCombatantName => {
    return {
        type: ADD_COMBATANT,
        payload: {
            newCombatantObject: {
                name: newCombatantName
            }
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

export const clearAll = () => {
    return {
        type: CLEAR_ALL,
        payload: {  }
    };
};

export const updateInitiative = (targetCombatantId, newInitiativeValue) => {
    return {
        type: UPDATE_INITIATIVE,
        payload: {
            targetCombatantId: targetCombatantId,
            newInitiativeValue: newInitiativeValue
        }
    };
};

export const toggleCombatantPass = (targetCombatantId) => {
    return {
        type: TOGGLE_COMBATANT_PASS,
        payload: {
            targetCombatantId: targetCombatantId
        }
    };
};

export const newPass = () => {
    return {
        type: NEW_PASS,
        payload: {  }
    };
};

export const toggleDead = (targetCombatantId) => {
    return {
        type: TOGGLE_DEAD,
        payload: {
            targetCombatantId: targetCombatantId
        }
    };
};