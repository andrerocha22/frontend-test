import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import DateInput from './index';

const defaultProps = {
  label: 'Test Label',
  iconSrc: 'iconTest',
};

describe('test date input', () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<DateInput {...setupProps} />);
  };

  const setupMount = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return mount(<DateInput {...setupProps} />);
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
    expect(wrapper.prop('label')).toEqual(defaultProps.label);
    expect(wrapper.prop('iconSrc')).toEqual(defaultProps.iconSrc);
  });
});
