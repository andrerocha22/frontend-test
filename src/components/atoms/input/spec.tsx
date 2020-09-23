import React from 'react';
import { shallow, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import { InputCurrency } from './index';

const mockCallBack = jest.fn();

const defaultProps = {
  icon: 'iconTest',
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(
    <InputCurrency onChangeCallback={mockCallBack} {...setupProps} />
  );
};

describe('Test currency input', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-currency-input');
    expect(component.length).toBe(1);
  });

  test('renders without error with icon props', () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(
      wrapper,
      'component-currency-input-with-icon'
    );
    expect(component.length).toBe(1);
  });

  test('not renders icon without icon props', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-currency-input-icon');
    expect(component.length).toBe(0);
  });

  test('currency input snapshot test', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-currency-input');
    expect(component).toMatchSnapshot();
  });

  test('test callback', () => {
    const wrapper = mount(<InputCurrency onChangeCallback={mockCallBack} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '50000' } });
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
