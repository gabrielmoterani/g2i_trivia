import React from 'react';
import { shallow } from 'enzyme';
import QuestionCard from '../../src/components/QuestionCard';



initialProps = {
    gradientColor: '#fff',
    question:     
    {
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "hard",
        "question": "In Undertale, having a &quot;Fun Value&quot; set to 56-57 will play the &quot;Wrong Number Song Call&quot;.",
        "correct_answer": "False",
        "incorrect_answers": [
          "True"
        ]
    },
    onSelectAnswer: jest.fn()
}


const setup = (props = initialProps) => shallow(<QuestionCard  {...props} />);


describe('Test QuestionCard Component', () => {
    const wrapper = setup();
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have two btns', () => {
        const btns = wrapper.find('TouchableOpacity');
        expect(btns.length).toBeGreaterThanOrEqual(2);
    });
    
    it('should call onSelectAnswer', () => {
        const btn = wrapper.find('TouchableOpacity').first();
        btn.simulate( 'press' );

        expect(initialProps.onSelectAnswer).toHaveBeenCalled();
    });

});