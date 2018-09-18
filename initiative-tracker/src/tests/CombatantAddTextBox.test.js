import React, { Component } from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe("combatantAddTextBox", () => {
    let shallowNode, mockAddFunction;

    beforeEach(() => {
        mockAddFunction = jest.fn();
        shallowNode = shallow(<CombatantAddTextBox onSubmitFunction={mockAddFunction} />);
    });

    it("should render an input element", () => {
        let result = shallowNode.find('input.combatantAddTextBox').first();
        expect(result.length).toEqual(1);
    });

    it("should render an button element", () => {
        let result = shallowNode.find('button.addButton').first();
        expect(result.length).toEqual(1);
    });

    it("should call the provided prop function when submitted", () => {
        let fakeEvent = { target: {  } };
        let result = shallowNode.find("input.combatantAddTextBox").first();
        result.simulate('submit', fakeEvent);
        expect(mockAddFunction.calls.length).toEqual(1);
    });

    it("should call the provided prop function when submitted", () => {
        let fakeEvent = { target: {  } };
        shallowNode.find("button.addButton").first();
        result.simulate('click', fakeEvent);
        expect(mockAddFunction.calls.length).toEqual(1);
    });
});