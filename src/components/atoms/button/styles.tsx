import styled from 'styled-components';

import { ButtonStyledProps } from './index';

export const PrimaryButton = styled.button<ButtonStyledProps>`
  font-weight: 600;
  font-size: 1.8rem;
  border: none;
  padding: 1.6rem 16rem;
  min-width: 400px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};

  &:disabled {
    opacity: 0.5;
  }

  @media all and (max-width: 768px) {
    width: 100%;
    min-width: 0px;
    padding: 1.6rem;
    justify-content: center;
    align-items: center;
  }
`;

export const SelectionButton = styled.button<ButtonStyledProps>`
  border: none;
  padding: 2rem;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};

  &:disabled {
    opacity: 0.5;
  }
`;
