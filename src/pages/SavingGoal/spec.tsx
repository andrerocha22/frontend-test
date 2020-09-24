import React from 'react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import 'jest-styled-components';

import SavingGoal from './index';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<SavingGoal {...setupProps} />).dive();
};
const setupMount = (props = {}) => {
  const setupProps = { ...props };
  return mount(<SavingGoal {...setupProps} />);
};

describe('test calculator input', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-saving-goal');
    expect(component.length).toBe(1);
  });

  test('calculator input snapshot test ', () => {
    const wrapper = setupMount();
    expect(wrapper).toMatchSnapshot();
  });
});
