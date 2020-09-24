import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import GoalHero from './index';

const defaultProps = {
  title: 'test-title',
  description: 'test-description',
  iconSrc: 'icon-src',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GoalHero {...setupProps} />).dive();
};

describe('test goal hero', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-goal-hero');
    expect(component.length).toBe(1);
  });

  test('goal hero snapshot test ', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-goal-hero');
    expect(component).toMatchSnapshot();
  });
});
