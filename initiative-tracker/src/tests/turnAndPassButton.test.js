import TurnAndPassButton from "../components/TurnAndPassButton.js";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { newPass } from "../stores/actions/actions.js";

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
    });

    it("should call the new pass callback when NewPassButton is clicked", () => {
        let newPassButton = shallowNode.find(".passButton").first();
        console.log(newPassButton);
        let fakeEvent = { target: { } };
        shallowNode.simulate('click', fakeEvent);
        expect(mockNewPassCallback.mock.calls.length).toEqual(1);
    });

    it("should call the new turn callback when NewTurnButton is clicked", () => {
        let newTurnButton = shallowNode.find(".newTurnButton").first();
        console.log(newTurnButton);
        let fakeEvent = { target: { } };
        newTurnButton.simulate('click', fakeEvent);
        expect(mockNewTurnCallback.mock.calls.length).toEqual(1);
    });

});