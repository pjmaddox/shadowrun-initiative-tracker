import React from 'react';
import ReactDOM from 'react-dom';
import SingleCombatant from "../components/SingleCombatant.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let shallowNode, expectedName, expectedId, mockIsDeadToggleFunction, mockTogglePassFunction, mockUpdateInitiativeValueFunction, mockRemoveCombatantFunction;

beforeEach(() => {
    expectedId = 0;
    expectedName = "sassafrass";
    mockRemoveCombatantFunction = jest.fn();
    mockIsDeadToggleFunction = jest.fn();
    mockTogglePassFunction = jest.fn();
    mockUpdateInitiativeValueFunction = jest.fn();
    shallowNode = shallow(<SingleCombatant id={expectedId} name={expectedName} 
            isDeadToggleFunction={mockIsDeadToggleFunction} 
            initiativeValueUpdateFunction={mockUpdateInitiativeValueFunction}
            togglePassFunction={mockTogglePassFunction}
            removeCombatantFunction={mockRemoveCombatantFunction}
        />);
});

it("should call the removeCombatant prop function when remove button is clicked", () => {
    
});

it("should call the toggleDead prop function when the isDead checkbox is clicked", () => {

});

it("should call the updateInitiative prop function when the initiative text field changes", () => {

});

it("should call the toggle hasGoneThisPass prop function when the hasGoneThisPass checkbox is clicked", () => {

});

it("should render a checkbox each for hasGoneThisPass, isDead", () => {

});

it("should render a text field with the current initiative value in it", () => {

});

it("should render a label with the combatant's name in it", () => {

});

it("should render a div with the class 'combatantContainer", () => {
    const result = shallowNode.find(".combatantContainer");
    expect(result.length).toEqual(1);
});

it("should ", () => {

});
