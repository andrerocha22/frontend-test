import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ButtonStyledProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  isActive?: boolean;
  disabled?: boolean;
}

const PrimaryButton = styled.button<ButtonStyledProps>`
  border: none;
  padding: 1.6rem 16rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;

const SelectionButton = styled.button<ButtonStyledProps>`
  border: none;
  padding: 2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
`;

export function ButtonPrimary(props: ButtonStyledProps) {
  return (
    <PrimaryButton
      {...props}
      onClick={props.handleClick}
      data-test="component-button-primary"
      disabled={props.disabled}
      onKeyUp={props.onKeyUp}
    >
      {props.children}
    </PrimaryButton>
  );
}

export function ButtonSelection(props: ButtonStyledProps) {
  return (
    <SelectionButton
      {...props}
      onClick={props.handleClick}
      data-test="component-button-selection"
      disabled={props.disabled}
      onKeyUp={props.onKeyUp}
    >
      {props.children}
    </SelectionButton>
  );
}
