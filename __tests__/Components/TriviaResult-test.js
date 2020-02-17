import React from 'react';
import { shallow } from 'enzyme';
import TrivaResult from '../../src/components/TriviaResult';



initialProps = {
    questions:     
    [{
        "category": "Entertainment: Video Games",
        "type": "boolean",
        "difficulty": "hard",
        "question": "In Undertale, having a &quot;Fun Value&quot; set to 56-57 will play the &quot;Wrong Number Song Call&quot;.",
        "correct_answer": false,
        "incorrect_answers": [
          "True"
        ],
        "answerWasCorrect": true
    },
    {
        "category": "Science: Mathematics",
        "type": "boolean",
        "difficulty": "hard",
        "question": "The binary number &quot;101001101&quot; is equivalent to the Decimal number &quot;334&quot;",
        "correct_answer": false,
        "incorrect_answers": [
          "True"
        ],
        "answerWasCorrect": false
    }
    ]
}


const setup = (props = initialProps) => shallow(<TrivaResult  {...props} />);


describe('Test Result Card Component', () => {
    const wrapper = setup();
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    
    it('should have questions', () => {
        const questions = wrapper.find('Text')
        expect(questions.length).toBeGreaterThanOrEqual(2);


    });

});