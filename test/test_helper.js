import jsdom from 'jsdom';
import _$ from 'jquery';
//_$ is a junkie/modified version of jquery

//Targets for the test helper suite:

//task-1: Set up a testing envionment to run like  abrowser in the command line
//we will use jsdom to emulate the DOM and HTML standard on cli
global.document = jsdom.jsdom('<!doctype html><body></body></html>');
//faking the global scope and initialising and setting up fake browser
global.window = global.document.defaultView;
//Faking window global variable
const $ = _$(global.window)
//creating our own instance of entire jquery library($) and passing it the fake window object to be responsible for.


//build  'renderComponent' helper that should render a given react class
//build helper for simulating events
//set up chai-jquery
