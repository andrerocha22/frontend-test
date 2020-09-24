import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import Card from './index';

const defaultProps = {
  primaryInfo: 'Test primary information',
  amount: '$999999',
  secondaryInfo: 'Test secondary information',
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Card {...setupProps} />);
};

const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(<Card {...setupProps} />);
};

describe('test card', () => {
  let component: ShallowWrapper = undefined;

  test('renders without error', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-card');
    expect(component.length).toBe(1);
  });

  test('card snapshot test ', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-card');
    expect(component).toMatchSnapshot();
  });

  test('card test props', () => {
    const wrapper = setupMount();
    expect(wrapper.prop('primaryInfo')).toEqual(defaultProps.primaryInfo);
    expect(wrapper.prop('amount')).toEqual(defaultProps.amount);
    expect(wrapper.prop('secondaryInfo')).toEqual(defaultProps.secondaryInfo);
  });
});
