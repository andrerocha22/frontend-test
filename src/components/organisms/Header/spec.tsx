import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import Header from './index';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<Header {...setupProps} />).dive();
};

describe('Header component', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-header');
    expect(component.length).toBe(1);
  });

  test('goal hero snapshot test ', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-header');
    expect(component).toMatchSnapshot();
  });
});
