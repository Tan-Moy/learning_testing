import {renderComponent, expect} from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
    let component; //declaring the variable 'component' in global scope so that all the 'it' functions have access to it.

    beforeEach(() => {
        component = renderComponent(CommentBox); //redeclaring with new value
    });
    // it is a statement that will run before each of our it statements. BeforeEach
    // allows us to DRY the code by not putting the statement in every 'it'.

    it('has class comment-box', () => {
        //const component = renderComponent(CommentBox);
        expect(component).to.have.class ('comment-box');
    });

    it('has a text area', () => {
        //const component = renderComponent(CommentBox);
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        //const component = renderComponent(CommentBox);
        expect(component.find('button')).to.exist;
    });
});
