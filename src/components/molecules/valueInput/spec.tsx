import React from 'react';
import { mount, shallow, ShallowWrapper } from 'enzyme';
import 'jest-styled-components';

import ValueInputContainer from './index';
import { findByTestAttr } from '../../../test/testUtils';

const defaultProps = {
  label: 'Test Label',
  icon: "iconTest",
  iconBackgroundColor: '#0f0f0f',
};

describe('test card', () => {
  const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<ValueInputContainer {...setupProps} />);
  };

  const setupMount = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return mount(<ValueInputContainer {...setupProps} />);
  };

  let component: ShallowWrapper = undefined;

  test('renders without error', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-value-input');
    expect(component.length).toBe(1);
  });

  test('card snapshot test ', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-value-input');
    expect(component).toMatchSnapshot();
  });

  test('card test props', () => {
    const wrapper = setupMount();
    expect(wrapper.prop('label')).toEqual(defaultProps.label);
    expect(wrapper.prop('icon')).toEqual(defaultProps.icon);
    expect(wrapper.prop('iconBackgroundColor')).toEqual(
      defaultProps.iconBackgroundColor
    );
  });
});
