import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CombatantList from "../components/CombatantList.js";
import SingleCombatant from "../components/SingleCombatant.js";

configure({ adapter: new Adapter() });

describe("rendering the single combatants", () => {
    let shallowNode, listOfCombatants, correctlyOrderedCombatants, mockClearAllFunction, mockNewPassFunction;

    beforeEach(() => {
        mockClearAllFunction = jest.fn();
        mockNewPassFunction = jest.fn();
        listOfCombatants = [
            { name: "Sammy", currentInitiative: 10, isDead: false, hasGoneThisPass: false },
            { name: "Joey", currentInitiative: 19, isDead: false, hasGoneThisPass: true },
            { name: "Billy", currentInitiative: 0, isDead: true, hasGoneThisPass: true },
            { name: "Philly", currentInitiative: 31, isDead: false, hasGoneThisPass: true },
            { name: "Suzzy", currentInitiative: 25, isDead: false, hasGoneThisPass: false },
            { name: "Roxy", currentInitiative: 24, isDead: true, hasGoneThisPass: true },
        ];
        correctlyOrderedCombatants = [
            { name: "Suzzy", currentInitiative: 25, isDead: false, hasGoneThisPass: false },
            { name: "Sammy", currentInitiative: 10, isDead: false, hasGoneThisPass: false },
            { name: "Philly", currentInitiative: 31, isDead: false, hasGoneThisPass: true },
            { name: "Joey", currentInitiative: 19, isDead: false, hasGoneThisPass: true },
            { name: "Roxy", currentInitiative: 24, isDead: true, hasGoneThisPass: true },
            { name: "Billy", currentInitiative: 0, isDead: true, hasGoneThisPass: true },
        ];
        shallowNode = shallow(<CombatantList newPassCallbackFunction={mockNewPassFunction} clearAllCallbackFunction={mockClearAllFunction} listOfCombatants={listOfCombatants} />);
    });
    function checkIfObjectIsSingleCombatant(objectData, singleCombatantElement) {
        return (objectData.name === singleCombatantElement.props.name &&
            objectData.currentInitiative === singleCombatantElement.props.currentInitiative &&
            objectData.hasGoneThisPass === singleCombatantElement.props.hasGoneThisPass &&
            objectData.isDead === singleCombatantElement.props.isDead )
    }

    it("should render no SingleCombatants when the combatant list is empty", () => {
        let emptyNode = shallow(<CombatantList clearAllCallbackFunction={mockClearAllFunction} combatants={[]} />);
        expect(emptyNode.find('SingleCombatant').length).toEqual(0);
    });

    it("should render one single combatant per entry in the listOfCombatants prop", () => {
        expect(shallowNode.find('SingleCombatant').length).toEqual(listOfCombatants.length);
    });

    it("should order the combatants who have not gone this pass before those that have, ignoring higher initiative", () => {
        let resultCombatantList = shallowNode.state('listOfCombatants');
        expect(resultCombatantList).toEqual(correctlyOrderedCombatants);
    });

    it("should render a button with the text 'clear all'", () => {
        expect(shallowNode.find('button#clearAllButton').length).toEqual(1);
    });

    it("should call the clearAll callback when the clear all button is pressed",() => {
        let fakeEvent = { target: { value: 0 } };
        shallowNode.find('#clearAllButton').simulate('click', fakeEvent);
        expect(mockClearAllFunction.mock.calls.length).toEqual(1);
    });

    it("should render a button with the text 'new pass'", () => {
        expect(shallowNode.find('button#newPassButton').length).toEqual(1);
    });

    it("should call the new pass callback function when the new pass button is clicked", () => {
        let fakeEvent = { target: { value: 0 } };
        shallowNode.find('#newPassButton').simulate('click', fakeEvent);
        expect(mockNewPassFunction.mock.calls.length).toEqual(1);
    });
});