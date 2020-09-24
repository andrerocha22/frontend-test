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
