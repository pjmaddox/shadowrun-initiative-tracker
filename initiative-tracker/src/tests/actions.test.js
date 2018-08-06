import { addCombatant } from '../stores/actions/actions.js';
import { ADD_COMBATANT } from '../stores/actions/actions.js';

import { removeCombatant } from '../stores/actions/actions.js';
import { REMOVE_COMBATANT } from '../stores/actions/actions.js';

import { CLEAR_ALL } from '../stores/actions/actions.js';
import { clearAll } from '../stores/actions/actions.js';

let expectedCombatantId;

beforeEach(() => {
    expectedCombatantId = 24;
});

describe("removeCombatant", () => {
    it("should generate an action with the type 'REMOVE_COMBATANT' ", () => {
        let result = removeCombatant(expectedCombatantId);
        expect(result.type).toEqual(REMOVE_COMBATANT);
    });

    it("should generate an action with a payload object", () => {
        let result = removeCombatant(expectedCombatantId);
        expect(result.payload).not.toBeNull();
    });

    it("should generate an action with a payload that contains the given id ", () => {
        let result = removeCombatant(expectedCombatantId);
        expect(result.payload.combatantId).toEqual(expectedCombatantId);
    });
});

describe("addCombatant", () => {
    it("should generate an action with the type 'ADD_COMBATANT'", () => {
        let result = addCombatant(24);
        expect(result.type).toEqual(ADD_COMBATANT);
    });

    it("should generate an action with a payload object", () => {
        let result = addCombatant(expectedCombatantId);
        expect(result.payload).not.toBeNull();
    });

    it("should generate an action with a payload that contains the given id ", () => {
        let result = addCombatant(expectedCombatantId);
        expect(result.payload.combatantId).toEqual(expectedCombatantId);
    });
});

describe("clearAll", () => {
    it("should generate an action with the type 'CLEAR_ALL'", () => {
        let result = clearAll();
        expect(result.type).toEqual(CLEAR_ALL);
    });

    it("should generate an action with a payload object", () => {
        let result = clearAll();
        expect(result.payload).not.toBeNull();
    });

    it("should generate an action with an empty payload", () => {
        let result = clearAll();
        expect(result.payload).toEqual({ });
    });
});