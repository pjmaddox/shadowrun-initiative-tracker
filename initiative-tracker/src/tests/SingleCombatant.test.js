import React from 'react';
import SingleCombatant from "../components/SingleCombatant.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let shallowNode, expectedName, expectedId, initialInitiative, expectedHasGoneThisPass, expectedIsDead, mockIsDeadToggleFunction, mockTogglePassFunction, mockUpdateInitiativeValueFunction, mockRemoveCombatantFunction;

beforeEach(() => {
    expectedId = 0;
    initialInitiative = 50;
    expectedName = "sassafrass";
    expectedHasGoneThisPass = false;
    expectedIsDead = false;
    mockRemoveCombatantFunction = jest.fn();
    mockIsDeadToggleFunction = jest.fn();
    mockTogglePassFunction = jest.fn();
    mockUpdateInitiativeValueFunction = jest.fn();
    shallowNode = shallow(<SingleCombatant 
            id={expectedId} 
            name={expectedName} 
            currentInitiative={initialInitiative}
            hasGoneThisPass={expectedHasGoneThisPass}
            isDead={expectedIsDead}
            isDeadToggleFunction={mockIsDeadToggleFunction} 
            initiativeValueUpdateFunction={mockUpdateInitiativeValueFunction}
            togglePassFunction={mockTogglePassFunction}
            removeCombatantFunction={mockRemoveCombatantFunction}
        />);
});

it("should call the removeCombatant prop function when remove button is clicked", () => {
    let thing = shallowNode.find(".removeCombatantButton");
    let mockEventObject = { target: { value: expectedId } };
    thing.simulate('click', mockEventObject);
    expect(mockRemoveCombatantFunction.mock.calls.length).toEqual(1);
    expect(mockRemoveCombatantFunction.mock.calls[0][0]).toEqual(expectedId);
});

it("should call the toggleDead prop function when the isDead checkbox is changed", () => {
    let thing = shallowNode.find(".toggleDeadCheckbox");
    let mockEventObject = { target: { value: expectedId } };
    thing.simulate('change', mockEventObject);
    expect(mockIsDeadToggleFunction.mock.calls.length).toEqual(1);
    expect(mockIsDeadToggleFunction.mock.calls[0][0]).toEqual(expectedId);
});

it("should call the updateInitiative prop function when the initiative text field changes", () => {
    let thing = shallowNode.find('.currentInitiativeDisplay');
    let newInitiativeValue = 100;
    let fakeEvent = { target: { value: newInitiativeValue } };
    thing.simulate('change', fakeEvent);
    expect(mockUpdateInitiativeValueFunction.mock.calls.length).toEqual(1);
    expect(mockUpdateInitiativeValueFunction.mock.calls[0][0]).toEqual(expectedId);
    expect(mockUpdateInitiativeValueFunction.mock.calls[0][1]).toEqual(newInitiativeValue);
});

it("should call the toggle hasGoneThisPass prop function when the hasGoneThisPass checkbox is change", () => {
    let thing = shallowNode.find('.hasGoneThisPassCheckbox')
    thing.simulate('change');
    expect(mockTogglePassFunction.mock.calls.length).toEqual(1);
});

it("should render a checkbox each for hasGoneThisPass, isDead", () => {
    let shouldBeHasGoneCheckbox = shallowNode.find('.hasGoneThisPassCheckbox').first();
    let shouldBeIsDeadCheckbox = shallowNode.find('.toggleDeadCheckbox').first();

    expect(shouldBeHasGoneCheckbox).not.toBeUndefined();

    expect(shouldBeIsDeadCheckbox).not.toBeUndefined();
});

it("should render a text field with the current initiative value in it", () => {
    let shouldHaveInitiativeTextField = shallowNode.find('.currentInitiativeDisplay');
    expect(shouldHaveInitiativeTextField).not.toBeUndefined();
    let thing = shallowNode.html();
    expect(thing.indexOf("value=\"" + initialInitiative + "\"")).toBeGreaterThanOrEqual(0);
});

it("should render a label with the combatant's name in it", () => {
    let label = shallowNode.find('span').first();
    expect(label.contains(expectedName)).toEqual(true);
});

it("should render a div with the class 'combatantContainer", () => {
    const result = shallowNode.find(".combatantContainer");
    expect(result.length).toEqual(1);
});

it("should ", () => {

});
