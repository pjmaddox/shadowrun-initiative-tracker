import React from 'react';
import ReactDOM from 'react-dom';
import SingleCombatant from "../components/SingleCombatant.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let shallowNode, expectedName, expectedId;

beforeEach(() => {
    expectedId = 0;
    expectedName = "sassafrass";
    shallowNode = shallow(<SingleCombatant id={expectedId} name={expectedName} />);
});

it("should render a div with the class 'combatantContainer", () => {
    const result = shallowNode.find(".combatantContainer");
    expect(result.length).toEqual(1);
});
