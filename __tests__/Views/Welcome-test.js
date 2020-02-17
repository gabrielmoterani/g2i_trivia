import React from 'react';
import { shallow } from 'enzyme';
import Welcome from '../../src/views/Welcome';

const setup = () => shallow(<Welcome />);


describe('Test Welcome Screen', () => {
    const wrapper = setup();
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  
    it('should have a button', () => {
      const btns = wrapper.find('TouchableOpacity');
      expect(btns).toExist()
    }); 
  
  });