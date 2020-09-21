import React from 'react';
import styled from 'styled-components';
import { InputCurrency } from '../../atoms/input';
import { LabelText } from '../../atoms/typography';

interface ValueInputProps {
  label: string;
  icon?: string;
  iconBackgroundColor?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%1;
`;

const ValueInputContainer = ({
  label,
  icon,
  iconBackgroundColor,
}: ValueInputProps) => {
  return (
    <Container data-test="component-value-input">
      <LabelText>{label}</LabelText>
      <InputCurrency icon={icon} backgroundColor={iconBackgroundColor} />
    </Container>
  );
};

export default ValueInputContainer;
