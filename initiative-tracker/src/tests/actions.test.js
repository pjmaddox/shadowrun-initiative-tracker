import { addCombatant } from '../stores/actions/actions.js';
import { ADD_COMBATANT } from '../stores/actions/actions.js';

import { removeCombatant } from '../stores/actions/actions.js';
import { REMOVE_COMBATANT } from '../stores/actions/actions.js';

import { CLEAR_ALL } from '../stores/actions/actions.js';
import { clearAll } from '../stores/actions/actions.js';

import { UPDATE_INITIATIVE, updateInitiative } from '../stores/actions/actions.js';
import { TOGGLE_COMBATANT_PASS, toggleCombatantPass } from '../stores/actions/actions.js';
import { NEW_PASS, newPass } from '../stores/actions/actions.js';
import { TOGGLE_DEAD, toggleDead } from '../stores/actions/actions.js';

let expectedCombatantId;

beforeEach(() => {
    expectedCombatantId = 24;
});

describe("toggleDead", () => {
    let expectedCombatantId = 4;

    it("should generate an action with the type 'TOGGLE_DEAD'", () => {
        let result = toggleDead(expectedCombatantId);
        expect(result.type).toEqual(TOGGLE_DEAD);
    });

    it("should generate an action with a payload object", () => {
        let result = toggleDead(expectedCombatantId);
        expect(result.payload).not.toBeNull();
    });

    it("should generate a payload with a targetCombatantId", () => {
        let result = toggleDead(expectedCombatantId);
        expect(result.payload.targetCombatantId).toEqual(expectedCombatantId);
    });
});

describe("toggleCombatantPass", () => {

    it("should generate an action with the type 'TOGGLE_COMBATANT_PASS'", () => {
        let result = newPass();
        expect(result.type).toEqual(NEW_PASS);
    });

    it("should generate an action with a payload object", () => {
        let result = toggleCombatantPass(expectedCombatantId);
        expect(result.payload).not.toBeNull();
    });
});

describe("toggleCombatantPass", () => {
    let expectedCombatantId = 4;

    it("should generate an action with the type 'TOGGLE_COMBATANT_PASS'", () => {
        let result = toggleCombatantPass(expectedCombatantId);
        expect(result.type).toEqual(TOGGLE_COMBATANT_PASS);
    });

    it("should generate an action with a payload object", () => {
        let result = toggleCombatantPass(expectedCombatantId);
        expect(result.payload).not.toBeNull();
    });

    it("should generate a payload with a targetCombatantId", () => {
        let result = toggleCombatantPass(expectedCombatantId);
        expect(result.payload.targetCombatantId).toEqual(expectedCombatantId);
    });
});

describe("updateInitiative", () => {
    let expectedCombatantId = 4;
    let expectedNewInitiative = 24;

    it("should generate an action with the type 'UPDATE_INITIATIVE'", () => {
        let result = updateInitiative(expectedCombatantId, expectedNewInitiative);
        expect(result.type).toEqual(UPDATE_INITIATIVE);
    });

    it("should generate an action with a payload object", () => {
        let result = updateInitiative(expectedCombatantId, expectedNewInitiative);
        expect(result.payload).not.toBeNull();
    });

    it("should generate a payload with a targetCombatantId and newInitiativeValue", () => {
        let result = updateInitiative(expectedCombatantId, expectedNewInitiative);
        expect(result.payload.targetCombatantId).toEqual(expectedCombatantId);
        expect(result.payload.newInitiativeValue).toEqual(expectedNewInitiative);
    });
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