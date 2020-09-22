import React from 'react';
import { mount, shallow } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import 'jest-styled-components';

import CalculatorInputs from './index';

const mockCallback = jest.fn();

describe('test calculator input', () => {
  const setup = (props = {}) => {
    const setupProps = { ...props };
    return shallow(
      <CalculatorInputs callback={mockCallback} {...setupProps} />
    ).dive();
  };

  //   const setupMount = (props = {}) => {
  //     const setupProps = { ...props };
  //     return mount(<CalculatorInputs callback={mockCallback} {...setupProps} />);
  //   };

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
