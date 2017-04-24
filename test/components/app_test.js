import {renderComponent, expect} from '../test_helper';
//importing required helpers from test_helper
import App from '../../src/components/app'
//importing the component to be tested

//Really inportant keywords

describe('App')
//groups together similar tests
//describing something about App. This string is just for test report

it('shows the correct txt')
//use 'it' to test a single attribute of a a target
//This string is just for test report

expect
//use 'expect' to make an 'assertion' about a target
//we tell it what to expect when the component renders