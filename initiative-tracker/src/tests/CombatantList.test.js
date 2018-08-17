import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CombatantList from "../components/CombatantList.js";
import SingleCombatant from "../components/SingleCombatant.js";

configure({ adapter: new Adapter() });

describe("rendering the single combatants", () => {
    let shallowNode, listOfCombatants, correctlyOrderedCombatants;

    beforeEach(() => {
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
        shallowNode = shallow(<CombatantList listOfCombatants={listOfCombatants} />);
    });
    function checkIfObjectIsSingleCombatant(objectData, singleCombatantElement) {
        return (objectData.name === singleCombatantElement.props.name &&
            objectData.currentInitiative === singleCombatantElement.props.currentInitiative &&
            objectData.hasGoneThisPass === singleCombatantElement.props.hasGoneThisPass &&
            objectData.isDead === singleCombatantElement.props.isDead )
    }

    it("should render no SingleCombatants when the combatant list is empty", () => {
        let emptyNode = shallow(<CombatantList combatants={[]} />);
        expect(emptyNode.find('SingleCombatant').length).toEqual(0);
    });

    it("should render one single combatant per entry in the listOfCombatants prop", () => {
        expect(shallowNode.find('SingleCombatant').length).toEqual(listOfCombatants.length);
    });

    it("should render the combatants who have not gone this pass before those that have, ignoring higher initiative", () => {
        let expectedFirstCombatant = listOfCombatants[4];
        let expectedSecondCombatant = listOfCombatants[0];

        expect(checkIfObjectIsSingleCombatant(expectedFirstCombatant, shallowNode.find('SingleCombatant').get(1)) ).toEqual(true);
        expect(checkIfObjectIsSingleCombatant(expectedSecondCombatant, shallowNode.find('SingleCombatant').get(2)) ).toEqual(true);
    });

    it("should render the combatants who have not gone this pass in order of their currentInitiative", () => {
        let expectedFirstCombatant = listOfCombatants[4];
        let expectedSecondCombatant = listOfCombatants[0];


    });

    it("should call the clearAll callback when the clear all button is pressed",() => {

    });


});