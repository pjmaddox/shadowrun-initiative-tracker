import TurnAndPassButton from "../components/TurnAndPassButton.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("TurnAndPassButton Render", () => {
    let shallowNode, mockNewTurnCallback, mockNewPassCallback;

    beforeEach(() => {
        mockNewPassCallback = jest.fn();
        mockNewTurnCallback = jestn.fn();
        shallowNode = shallow(<TurnAndPassButton onNewTurnClick={mockNewTurnCallback} onNewPassClick={mockNewPassCallback} />);
    });

    it("should render two buttons", () => {
        let result = shallowNode.find("button");
        expect(result.length).toEqual(2);
    })


});