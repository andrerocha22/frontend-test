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
  name?: string;
}

export const ButtonPrimary: React.FunctionComponent<ButtonStyledProps> = (
  props
) => {
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
};

export const ButtonSelection: React.FunctionComponent<ButtonStyledProps> = (
  props
) => {
  return (
    <SelectionButton
      {...props}
      onClick={props.handleClick}
      data-test={`component-${props.name}`}
      disabled={props.disabled}
      onKeyUp={props.onKeyUp}
    >
      {props.children}
    </SelectionButton>
  );
};
