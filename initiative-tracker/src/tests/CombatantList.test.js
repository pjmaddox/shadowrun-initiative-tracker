import { shallow, configure } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import CombatantList from "../components/CombatantList.js";
import SingleCombatant from "../components/SingleCombatant.js";

configure({ adapter: new Adapter() });

describe("rendering the single combatants", () => {
    let shallowNode, listOfCombatants;

    beforeEach(() => {
        listOfCombatants = [
            { name: "Sammy", currentInitiative: 10, isDead: false, hasGoneThisPass: false },
            { name: "Joey", currentInitiative: 19, isDead: false, hasGoneThisPass: true },
            { name: "Billy", currentInitiative: 0, isDead: true, hasGoneThisPass: true },
            { name: "Philly", currentInitiative: 31, isDead: false, hasGoneThisPass: true },
            { name: "Suzzy", currentInitiative: 25, isDead: false, hasGoneThisPass: false },
        ];
        shallowNode = shallow(<CombatantList combatants={listOfCombatants} />);
    });

    it("should render no SingleCombatants when the combatant list is empty", () => {
        let emptyNode = shallow(<CombatantList combatants={[]} />);
        
    });
});