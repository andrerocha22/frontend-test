/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';
import styled from 'styled-components';
import { InputCurrency } from '../../atoms/input';
import { LabelText } from '../../atoms/typography';
import DateInput from '../../molecules/dateInput';
const arrowIconLeft = require('../../../assets/icons/arrow-left.svg') as string;
const arrowIconRight = require('../../../assets/icons/arrow-right.svg') as string;
const $Icon = require('../../../assets/icons/$.svg') as string;

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  width: 100%;
  margin-top: 4rem;
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AmountDateInputs: React.FC = () => {
  const handleMonthDiff = (diff: number) => {
    console.log(diff);
  };

  const handleAmountInput = (amount: any) => {
    console.log(amount);
  };

  return (
    <CalculatorContainer>
      <InputsContainer>
        <LabelText>Total Amount</LabelText>
        <InputCurrency
          icon={$Icon}
          backgroundColor={'#F4F8FA'}
          onChangeCallback={handleAmountInput}
        />
      </InputsContainer>
      <InputsContainer>
        <LabelText>Reach goal by</LabelText>
        <DateInput
          iconSrcRight={arrowIconRight}
          iconSrcLeft={arrowIconLeft}
          diffCallback={handleMonthDiff}
        />
      </InputsContainer>
    </CalculatorContainer>
  );
};

export default AmountDateInputs;
