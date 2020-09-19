import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonStyledProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  isActive?: boolean;
}

const ButtonConfirm = styled.button<ButtonStyledProps>`
  border: none;
  padding: 1rem 10rem;
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  border-radius: ${props => props.borderRadius};
`;

export function ButtonPrimary(props: ButtonStyledProps) {
  return (
    <ButtonConfirm
      {...props}
      onClick={props.handleClick}
      data-test="component-button"
    >
      {props.children}
    </ButtonConfirm>
  );
}
