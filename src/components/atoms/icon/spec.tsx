import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import { Icon } from './index';

const defaultProps = {
  color: '#ffffff',
  backgroundColor: '#000000',
  src: 'iconTest',
};

const mockCallBack = jest.fn();

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Icon clickCallback={mockCallBack} {...setupProps} />);
};

describe('test icon', () => {
  let component: ShallowWrapper = undefined;

  test('renders without error', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-icon');
    expect(component.length).toBe(1);
  });

  test('card snapshot test ', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-icon');
    expect(component).toMatchSnapshot();
  });

  test('test icon click', () => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-icon');
    component.simulate('click');
    expect(mockCallBack).toHaveBeenCalled();
  });
});
