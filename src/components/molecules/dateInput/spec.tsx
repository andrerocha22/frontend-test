import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import DateInput from './index';

const defaultProps = {
  iconSrcLeft: 'iconTest',
  iconSrcRight: 'iconTest',
};

const mockCallback = jest.fn();

describe('test date input', () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DateInput diffCallback={mockCallback} {...setupProps} />);
  };

  const setupMount = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return mount(<DateInput diffCallback={mockCallback} {...setupProps} />);
  };

  let component: ShallowWrapper = undefined;

  test('renders without error', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-date-input');
    expect(component.length).toBe(1);
  });

  test('date input snapshot test ', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-date-input');
    expect(component).toMatchSnapshot();
  });

  test('date input test props', () => {
    const wrapper = setupMount();
    expect(wrapper.prop('iconSrcLeft')).toEqual(defaultProps.iconSrcLeft);
  });

  test('date input test props', () => {
    const wrapper = setupMount();
    expect(wrapper.prop('iconSrcRight')).toEqual(defaultProps.iconSrcRight);
  });
});

describe('test if child components renders correctly', () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(
      <DateInput diffCallback={mockCallback} {...setupProps} />
    ).dive();
  };

  test('renders backward button', () => {
    const wrapper = setup();
    const buttonBackward = findByTestAttr(wrapper, 'component-button-backward');
    expect(buttonBackward.length).toBe(1);
  });

  test('renders forward button', () => {
    const wrapper = setup();
    const buttonForward = findByTestAttr(wrapper, 'component-button-forward');
    expect(buttonForward.length).toBe(1);
  });

  test('renders date display', () => {
    const wrapper = setup();
    const dateDisplay = findByTestAttr(wrapper, 'component-date-display');
    expect(dateDisplay.length).toBe(1);
  });

  test('renders month text', () => {
    const wrapper = setup();
    const monthText = findByTestAttr(wrapper, 'component-month-text');
    expect(monthText.length).toBe(1);
  });

  test('renders year text', () => {
    const wrapper = setup();
    const yearText = findByTestAttr(wrapper, 'component-year-text');
    expect(yearText.length).toBe(1);
  });
});
