import React from 'react';
import { shallow } from 'enzyme';
import Register from '../../src/views/Register';

const setup = () => shallow(<Register />);


describe('Test Register Screen', () => {
    const wrapper = setup();
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should have a text Input', () => {
        const inputs = wrapper.find('TextInput');
        expect(inputs).toExist()
      }); 

    it('should have a button', () => {
      const btns = wrapper.find('TouchableOpacity');
      expect(btns).toExist()
    }); 
  
});