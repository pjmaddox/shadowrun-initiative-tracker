import { initiativeApp } from "../stores/reducers/combatantListReducers.js";
import { ADD_COMBATANT } from "../stores/actions/actions.js";

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

    // it("should return the result of the action when there is not current state, but a valid action", () => {
    //     expect(true).toEqual(false);
    // });
});