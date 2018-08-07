// import React from 'react';
// import ReactDOM from 'react-dom';
// import SingleCombatant from "../components/SingleCombatant.js";
// import { shallow, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";

// configure({ adapter: new Adapter() });

// let shallowNode, expectedName, expectedId;

// beforeEach(() => {
//     expectedId = 0;
//     expectedName = "sassafrass";
//     shallowNode = shallow(<SingleCombatant id={1} name={""} />);
// });

// it("should render a div with the class 'combatantContainer", () => {
//     //const result = shallowNode.find("combatantContainer");
//     //expect(result.length).toEqual(1);
// });

import React from 'react';
import ReactDOM from 'react-dom';
import SingleCombatant from '../components/SingleCombatant.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SingleCombatant id={1} name={""} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
