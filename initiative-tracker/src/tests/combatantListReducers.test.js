import { initiativeApp } from "../stores/reducers/combatantListReducers.js";
import { ADD_COMBATANT, REMOVE_COMBATANT, CLEAR_ALL } from "../stores/actions/actions.js";
import _ from 'lodash';

const initialState = {
    combatants: [ ]
};

describe("initiativeApp", () => {
    it("should return an empty list of combatants when no current state and no action given", () => {
        let result = initiativeApp(undefined, undefined);
        expect(result).toEqual(initialState);
    });

    it("should return previous state when the action is undefined or null", () => {
        let prevState = { walrus: true };
        let undefinedAction = undefined;
        let result = initiativeApp(prevState, { undefinedAction });
        expect(result).toEqual(prevState);
    });

    it("should return previous state when the action.type is undefined or null", () => {
        let prevState = { walrus: true };
        let undefinedAction = undefined;
        let result = initiativeApp(prevState, { undefinedAction });
        expect(result).toEqual(prevState);
    });

    it("should return the previous state if there is an unrecognized action type", () => {
        let unrecognizedActionType = "iauehfuyei";
        let prevState = { walrus: true };
        let result = initiativeApp(prevState, { type: unrecognizedActionType, payload: {  } });
        expect(result).toEqual(prevState);
    });

    it("should return the result of the action when there is not current state, but a valid action", () => {
        let previousState = undefined
        let newCombatant = { name: "Sam" };
        let action = { type: ADD_COMBATANT, payload: { newCombatantObject: newCombatant} };
        let result = initiativeApp(previousState, action);        

        expect(_.indexOf(result.combatants, newCombatant)).toBeGreaterThanOrEqual(0);
        expect(result.combatants.length).toEqual(1);
    });

    it("should add the expected combatant data to the combatant list when type is ADD_COMBATANT", () => {
        let previousState = { combatants: [ { name: "George" } ] };
        let newCombatant = { name: "Sam" };
        let action = { type: ADD_COMBATANT, payload: { newCombatantObject: newCombatant } };
        let result = initiativeApp(previousState, action);

        expect(result.combatants.length).toEqual(2);
        expect(_.indexOf(result.combatants, newCombatant)).toBeGreaterThanOrEqual(0);
    });

    it("should remove the expected combatant data from the combatant list when type is REMOVE_COMBATANT", () => {
        let expectedRemovedCombatant = { name: "Juan"};
        let previousState = { combatants: [ { name: "George" }, { name: "Sam"}, expectedRemovedCombatant, { name: "Rodrigo"} ] };
        let removalId = 2;
        let action = { type: REMOVE_COMBATANT, payload: { targetIndex: removalId } };
        let result = initiativeApp(previousState, action);
        expect(result.combatants.length).toEqual(3);
        expect(_.indexOf(result.combatants, expectedRemovedCombatant)).toBeLessThan(0);
    });

    it("should remove all entries from the combatant list when type is CLEAR_ALL", () => {
        let previousState = { combatants: [ { name: "George" }, { name: "Sam"}, { name: "Juan"}, { name: "Rodrigo"} ] };
        let action = { type: CLEAR_ALL, payload: {  } };
        let result = initiativeApp(previousState, action);
        expect(result.combatants.length).toEqual(0);
    });
});