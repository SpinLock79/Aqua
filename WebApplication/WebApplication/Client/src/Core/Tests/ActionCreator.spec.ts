import {actionCreator} from "../ActionCreator";

describe("ActionCreator", ()=>{
    it("Create",()=>{
        let actionType = actionCreator<string>("TEST_ACTION");
        let action = actionType("test");

        expect(actionType.type).toEqual("TEST_ACTION");
        expect(action.payload).toEqual("test");
    });
});