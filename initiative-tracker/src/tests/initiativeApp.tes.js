import initiativeApp from "../stores/reducers/initiativeApp";
import { ADD_COMBATANT, REMOVE_COMBATANT, CLEAR_ALL, TOGGLE_DEAD, NEW_PASS, TOGGLE_COMBATANT_PASS } from "../stores/actions/actions.js";
import { addCombatant, removeCombatant, clearAll, toggleDead, newPass, toggleCombatantPass } from "../stores/actions/actions.js";
import _ from 'lodash';

const initialState = {
    combatants: [ ]
};

describe("initiative app reducer functions", () => {
    let previousState;

    beforeEach(() => {
        previousState = {
            combatants: [ { name: "John", hasGoneThisPass: false, isDead: false, currentInitiative: 56 }, 
            { name: "Sammy", hasGoneThisPass: true, isDead: false, currentInitiative: 10 }, 
            { name: "Juan", hasGoneThisPass: true, isDead: false, currentInitiative: 5 }  ]
        };
    });

    it("should remove the combatant in target index when 'REMOVE_COMBATANT",() => {
        let combatantThatShouldntExist = { name: "Sammy", hasGoneThisPass: true, isDead: false, currentInitiative: 10 };
        let action = removeCombatant(1);
        let result = initiativeApp(previousState, action);
        
        expect(result.combatants.length).toEqual(2);
        expect(_.any(result.combatants, combatantThatShouldntExist)).toEqual(false);
    });

    it("should add a combatant object with correct values to the combatants list when 'ADD_COMBATANT'", () => {
        let expectedCombatantName = "Steven";
        let expectedCombatantIsDeadValue = false;
        let expectedCombatantHasGoneThisPassValue = false;
        let expectedCurrentInitiativeValue = 0;
        let action = addCombatant("Steven");
        let result = initiativeApp(previousState, action);
        let expectedCombatantObject = {
            name: expectedCombatantName,
            hasGoneThisPass: expectedCombatantHasGoneThisPassValue,
            isDead: expectedCombatantIsDeadValue,
            currentInitiative: expectedCurrentInitiativeValue
        };
        expect(_.some(result.combatants, expectedCombatantObject));
        expect(result.combatants.length).toEqual(4);
    })

    it("should change the target combatant's dead flag to the current opposite when type = 'TOGGLE_DEAD'", () => {
        let expectedTargetCombatant = 0;
        let newAction = toggleDead(0);
        let result = initiativeApp(previousState, newAction);
        expect(result.combatants[0].isDead).toEqual(true);
    });

    it("should change all combatant's hasGoneThisPass to false", () => {
        let newAction = newPass();
        let result = initiativeApp(previousState, newAction);
        _.forEach(result.combatants, (currentCombatant) => {
            expect(currentCombatant.hasGoneThisPass).toEqual(false);
        });
    });

    it("should subtract 10 from combatant's initiative value when 'TOGGLE_COMBATANT_PASS'", () => {
        let combatantIndex = 1;
        let expectedNewInitiative = previousState.combatants[combatantIndex].currentInitiative - 10;
        let newAction = toggleCombatantPass(combatantIndex);
        let result = initiativeApp(previousState, newAction);
        expect(result.combatants[combatantIndex].currentInitiative).toEqual(expectedNewInitiative);
    });

    it("should set initiative to zero when 'TOGGLE_COMBATANT_PASS' and currentInitiative is less than 10", () => {
        let combatantIndex = 2;
        let expectedNewInitiative = 0;
        let newAction = toggleCombatantPass(combatantIndex);
        let result = initiativeApp(previousState, newAction);
        expect(result.combatants[combatantIndex].currentInitiative).toEqual(expectedNewInitiative);
    });

    it("should change the target combatant's initiative value to be the new value when 'UPDATE_INITIATIVE'",() => {
        let expectedNewInitiativeValue = 999;
        let targetCombatantIndex = 0;
        let newAction = updateInitiative(targetCombatantIndex, expectedNewInitiativeValue);
        let result = initiativeApp(previousState, newAction);
        expect(result.combatants[targetCombatantIndex].currentInitiative).toEqual(expectedNewInitiativeValue);
    });

    it("should ");
});

describe("initiativeApp base behavior", () => {

    it("should return an empty list of combatants when no current state and no action given", () => {
        let result = initiativeApp(undefined, undefined);
        expect(result).toEqual(initialState);
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