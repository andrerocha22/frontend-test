import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import CalculatorInputs from './index';

const mockCallback = jest.fn();

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<CalculatorInputs callback={mockCallback} {...setupProps} />);
};

describe('test calculator input', () => {
  test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-calculator-input');
    expect(component.length).toBe(1);
  });

  test('calculator input snapshot test ', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-calculator-input');
    expect(component).toMatchSnapshot();
  });
});
