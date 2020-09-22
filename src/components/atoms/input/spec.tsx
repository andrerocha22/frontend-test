import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import { InputCurrency } from './index';

const mockCallBack = jest.fn();

const defaultProps = {
  icon: 'iconTest',
  backgroundColor: '#F4F8FA',
};

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(
    <InputCurrency onChangeCallback={mockCallBack} {...setupProps} />
  );
};

describe('Test value input', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-value-input');
    expect(component.length).toBe(1);
  });

  test('renders without error with bcon and backgroundColor props', () => {
    const wrapper = setup(defaultProps);
    const component = findByTestAttr(wrapper, 'component-value-input');
    expect(component.length).toBe(1);
  });

  test('test callback', () => {
    const wrapper = mount(<InputCurrency onChangeCallback={mockCallBack} />);
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: '50000' } });
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
