import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import * as Helpers from '../../../utils/Helpers';

import DateInput from './index';

const defaultProps = {
  iconSrcLeft: 'iconTest',
  iconSrcRight: 'iconTest',
};

const mockFunctionForwardDate = jest.spyOn(
  Helpers,
  'handleButtonChangeDateForward'
);
const mockFunctionBackwardDate = jest.spyOn(
  Helpers,
  'handleButtonChangeDateBackward'
);

const mockCallback = jest.fn();

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(
    <DateInput differenceDatesCallback={mockCallback} {...setupProps} />
  );
};

const setupMount = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return mount(
    <DateInput differenceDatesCallback={mockCallback} {...setupProps} />
  );
};

describe('test date input', () => {
  let component: ShallowWrapper = undefined;

  test('renders without error', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-date-input');
    expect(component.length).toBe(1);
  });

  test('date input snapshot test', () => {
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

describe('test date input handle functions', () => {
  test('test if forward function is called when click the > button', () => {
    const wrapper = setupMount();
    const button = wrapper.find(`[data-test="component-right-button"]`).first();
    button.simulate('click');
    expect(mockFunctionForwardDate).toHaveBeenCalledTimes(1);
  });

  test('test if backward function is not called when click the < button', () => {
    const wrapper = setupMount();
    const button = wrapper.find(`[data-test="component-left-button"]`).first();
    button.simulate('click');
    expect(mockFunctionBackwardDate).toHaveBeenCalledTimes(0);
  });

  test('test if backward function is called when click the > and <', () => {
    const wrapper = setupMount();
    console.log(wrapper.debug());
    const buttonRight = wrapper
      .find(`[data-test="component-right-button"]`)
      .first();
    const buttonLeft = wrapper
      .find(`[data-test="component-left-button"]`)
      .first();
    buttonRight.simulate('click');
    buttonLeft.simulate('click');
    expect(mockFunctionBackwardDate).toHaveBeenCalledTimes(1);
  });
});
