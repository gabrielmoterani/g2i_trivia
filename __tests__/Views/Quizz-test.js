import React from 'react';
import { shallow } from 'enzyme';
import Quizz from '../../src/views/Quizz';

const setup = () => shallow(<Quizz />);


describe('Test Quizz Screen', () => {
    const wrapper = setup();
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]);
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render loading', () => {
        const loading = wrapper.find('Loading')
        expect(loading).toExist()
    });

});