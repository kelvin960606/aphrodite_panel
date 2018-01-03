import React from 'react';
import { shallow } from 'enzyme';

import { navItems } from 'containers/Header';
import Navigator from '../index';

describe('<Navigator />', () => {
    const wrapper = shallow(<Navigator items={navItems} />);

    it('should render Navigator Correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a nav element', () => {
        expect(wrapper.find('nav').length).toEqual(1);
    });
});
