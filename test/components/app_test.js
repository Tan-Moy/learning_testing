import {renderComponent, expect} from '../test_helper';
//importing required helpers from test_helper
import App from '../../src/components/app'
//importing the component to be tested Really important keywords
describe('App', () => {

    it('shows the correct txt', () => {

        const component = renderComponent(App);
        //create an instance of App

        expect(component)
            .to
            .contain('React simple starter')
    })
})

// describe: groups together similar tests describing something about App. This
// string is just for test report it: use 'it' to test a single attribute of a
// target This string is just for test report expect: use 'expect' to make an
// 'assertion' about a target we tell it what to expect when the component
// renders