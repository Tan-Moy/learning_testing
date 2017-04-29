import { renderComponent, expect } from "../test_helper";
import CommentList from "../../src/components/comment_list";


describe("CommentList", () => {
  let component;

  beforeEach(() => {
    const props = { comments: ["new Comment", "new Comment 2"] };
    component = renderComponent(CommentList, null, props);
  });

  it("shows an LI for each component", () => {
      expect(component.find('li').length).to.equal(2)
  });
  it("shows each comment provided", () => {
      expect(component).to.contain('new Comment');
      expect(component).to.contain('new Comment 2');
  });
});
