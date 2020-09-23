import React, { ReactNode } from 'react';
import { PrimaryButton, SelectionButton } from './styles';

export interface ButtonStyledProps {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  isActive?: boolean;
  disabled?: boolean;
}

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
