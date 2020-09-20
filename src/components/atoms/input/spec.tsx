import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../../test/testUtils';
import { InputText } from './index';

const setup = (props = {}) => {
  const setupProps = { ...props };
  return shallow(<InputText {...setupProps} />);
};

describe('Test value input', () => {
  let component: ShallowWrapper = undefined;

  beforeEach(() => {
    const wrapper = setup();
    component = findByTestAttr(wrapper, 'component-value-input');
  });

  test('renders without error', () => {
    expect(component.length).toBe(1);
  });
});
