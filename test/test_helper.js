import jsdom from "jsdom";
import _$ from "jquery";
//_$ is a junkie/modified version of jquery
import TestUtils from "react-addons-test-utils";
import { expect } from "chai";
import React from "react";
import { Provider } from "react-redux";
//we need the react component to be wrapped in this
import { createStore } from "redux";
import reducers from "../src/reducers";
import ReactDOM from 'react-dom';

//Targets for the test helper suite:

//task-1: Set up a testing envionment to run like  abrowser in the command line
//we will use jsdom to emulate the DOM and HTML standard on cli
global.document = jsdom.jsdom("<!doctype html><body></body></html>");
//faking the global scope and initialising and setting up fake browser
global.window = global.document.defaultView;
//Faking window global variable
const $ = _$(global.window);
//creating our own instance of entire jquery library($) and passing it the fake window object to be responsible for.

//task-2: build  'renderComponent' helper that should render a given react class
//The sole purpose of this helper is no matter what iit is going to take a react component class render it, get it's html and wrap that with a jquery element and reurns the jquery wrapped element
function renderComponent(ComponentClass,props,state) {
  //we pass in the react componentClass,props and state to the function. It is the same class we create when we say class something extends React.Component
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers,state)}>
      <ComponentClass {...props} />
    </Provider>
  );
  //we will make an instance/copy of that class(including the redux store and state) using react get it rendered into the dom.Need test-utils for it.

  return $(ReactDOM.findDOMNode(componentInstance));
  //we will find the dom node of our component instance. This produces the HTML that we need.
}

//build helper for simulating events
//set up chai-jquery

export { renderComponent, expect };
