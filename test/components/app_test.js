import { renderComponent, expect } from "../test_helper";
//importing required helpers from test_helper
import App from "../../src/components/app";
//importing the component to be tested Really important keywords

describe("App", () => {
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it("shows a comment box", () => {
        expect(component.find(".comment-box")).to.exist;
        // the above component is wrapped in jquery since find is a jquery method that
        // accepts a css selector which we expect to exist
    });
});

// describe: groups together similar tests describing something about App. This
// string is just for test report, it: use 'it' to test a single attribute of a
// target. This string is just for test report, expect: use 'expect' to make an
// 'assertion' about a target we tell it what to expect when the component
// renders
