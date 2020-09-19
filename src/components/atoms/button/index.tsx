import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonStyledProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  isActive?: boolean;
  testName?: string;
}

const Button = styled.button<ButtonStyledProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
`;

export function ButtonPrimary(props: ButtonStyledProps) {
  return (
    <Button
      {...props}
      onClick={props.handleClick}
      data-test={`${props.testName}`}
    >
      {props.children}
    </Button>
  );
}
