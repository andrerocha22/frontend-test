import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ValueInputProps {
  icon?: string;
  backgroundColor?: string;
}

const ValueInputContainer = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  width: 100%;
`;

const IconContainer = styled.img<ValueInputProps>`
  width: 56px;
  height: 56px;
  padding: 1.6rem;
  background-color: ${props => props.backgroundColor};
`;

const Input = styled.input`
  display: flex;
  width: 100%;
  background: #ffffff;
  border: none;
  padding: 1.6rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
`;

export function ValueInput(props: ValueInputProps) {
  if (props.icon) {
    return (
      <ValueInputContainer data-test="component-value-input">
        <IconContainer {...props} src={props.icon} data-test="component-value-input-icon" />
        <Input type="number" />
      </ValueInputContainer>
    );
  }
  {
    return (
      <ValueInputContainer data-test="component-value-input">
        <Input />
      </ValueInputContainer>
    );
  }
}
