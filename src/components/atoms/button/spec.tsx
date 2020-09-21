import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr } from '../../../test/testUtils';
import { ButtonPrimary } from './index';
import 'jest-styled-components';

const defaultProps = {
  color: '#ffffff',
  backgroundColor: '#5555ff',
  borderRadius: '8px',
};

const mockCallBack = jest.fn();

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ButtonPrimary handleClick={mockCallBack} {...setupProps} />);
};

describe('Test Button component', () => {
  let component: ShallowWrapper = undefined;

  beforeEach(() => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-button-primary');
  });

  test('renders without error', () => {
    expect(component.length).toBe(1);
  });

  test('render with corrects props', () => {
    expect(component).toHaveStyleRule('color', '#ffffff');
    expect(component).toHaveStyleRule('background-color', '#5555ff');
    expect(component).toHaveStyleRule('border-radius', '8px');
  });

  test('test button click', () => {
    component.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
