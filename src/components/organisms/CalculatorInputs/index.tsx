/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { InputCurrency } from '../../atoms/input';
import { LabelText } from '../../atoms/typography';
import DateInput from '../../molecules/dateInput';
const arrowIconLeft = require('../../../assets/icons/arrow-left.svg') as string;
const arrowIconRight = require('../../../assets/icons/arrow-right.svg') as string;
const $Icon = require('../../../assets/icons/$.svg') as string;

interface CalculatorInputsProps {
  callback: (months: number, depositValue: string, amount: string) => void;
}

const CalculatorContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.6rem;
  grid-auto-flow: column;
  width: 100%;
  margin-top: 4rem;

  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CalculatorInputs = ({ callback }: CalculatorInputsProps) => {
  const [numberOfDeposits, setNumberOfDeposits] = useState<number>(1);
  const [amount, setAmount] = useState<string>('0');

  const depositValue = () => {
    const valueToString = amount.toString().replace(/,/g, '');
    const depositValue = Number(valueToString) / numberOfDeposits;
    return depositValue.toFixed(2);
  };

  useEffect(() => {
    callback(numberOfDeposits, depositValue(), amount);
  }, [amount, numberOfDeposits]);

  const handleMonthDiff = (numberOfMonthlyDeposits: number) => {
    setNumberOfDeposits(numberOfMonthlyDeposits);
  };

  const handleAmountInput = (amount: string) => {
    setAmount(amount);
  };

  return (
    <CalculatorContainer data-test="component-calculator-input">
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

export default CalculatorInputs;
