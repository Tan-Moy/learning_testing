import { renderComponent, expect } from "../test_helper";
import CommentBox from "../../src/components/comment_box";

describe("CommentBox", () => {
  let component; //declaring the variable 'component' in global scope so that all the 'it' functions have access to it. As usual the variable gets stored in memspace as undefined during initial scan by Syntax parser 

  beforeEach(() => {
    component = renderComponent(CommentBox); //redeclaring with new value
  });
  // it is a statement that will run before each of our it statements. BeforeEach
  // allows us to DRY the code by not putting the statement in every 'it'.

  it("has class comment-box", () => {
    //const component = renderComponent(CommentBox);
    expect(component).to.have.class("comment-box");
  });

  it("has a text area", () => {
    //const component = renderComponent(CommentBox);
    expect(component.find("textarea")).to.exist;
  });

  it("has a button", () => {
    //const component = renderComponent(CommentBox);
    expect(component.find("button")).to.exist;
  });

  describe("entering some text", () => {
    beforeEach(() => {
      component.find("textarea").simulate("change", "new comment");
      // we have the component which we dug thorugh to find a very specific html
      // element, the textarea. Then we simulate a change event on the text area. We
      // handle that event by ading a string called 'new comment' as the new value to
      // the textarea
    });
    it("shows the text in textarea", () => {
      expect(component.find("textarea")).to.have.value("new comment");
    });
    it("When submitted, clears the input", () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});
