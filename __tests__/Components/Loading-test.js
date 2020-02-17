import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../src/components/Loading';

const setup = () => shallow(<Loading />);


describe('Test LoadingComponent', () => {
    const wrapper = setup();
  
    it('should render properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render spinner', () => {
        const loading = wrapper.find('ActivityIndicator')
        expect(loading).toExist()
    });

});