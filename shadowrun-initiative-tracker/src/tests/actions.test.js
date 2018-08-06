import addCombatant from '../stores/action/actions.js';
import ADD_COMBATANT from '../stores/action/actions.js';

import removeCombatant from '../stores/action/actions.js';
import REMOVE_COMBATANT from '../stores/action/actions.js';

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
        expect(result.payload).toEqual(true);
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
        expect(result.payload).toEqual(true);
    });

    it("should generate an action with a payload that contains the given id ", () => {
        let result = addCombatant(expectedCombatantId);
        expect(result.payload.combatantId).toEqual(expectedCombatantId);
    });
});