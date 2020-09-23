/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState, useEffect, useCallback } from 'react';
import { InputCurrency } from '../../atoms/input';
import { LabelText } from '../../atoms/typography';
import DateInput from '../../molecules/dateInput';

import { CalculatorContainer, InputsContainer } from './styles';

import arrowIconLeft from '../../../assets/icons/arrow-left.svg';
import arrowIconRight from '../../../assets/icons/arrow-right.svg';
import DollarSignIcon from '../../../assets/icons/dollar-sign.svg';

interface CalculatorInputsProps {
  callback: (
    months: number,
    depositValue: string,
    amount: string,
    month: string,
    year: string
  ) => unknown;
}

const CalculatorInputs = ({ callback }: CalculatorInputsProps) => {
  const [numberOfDeposits, setNumberOfDeposits] = useState<number>(1);
  const [amount, setAmount] = useState<string>('0');
  const [year, setYear] = useState<string>('');
  const [month, setMonth] = useState<string>('');

  const depositValue = () => {
    const valueToString = amount.toString().replace(/,/g, '');
    const depositValue = Number(valueToString) / numberOfDeposits;
    return depositValue.toFixed(2);
  };

  const memoizedCallback = useCallback(() => {
    callback(numberOfDeposits, depositValue(), amount, month, year);
  }, [amount, month, numberOfDeposits, year]);

  useEffect(() => {
    memoizedCallback();
  }, [amount, month, year]);

  const handleMonthDiff = (
    numberOfMonthlyDeposits: number,
    month: string,
    year: string
  ) => {
    setNumberOfDeposits(numberOfMonthlyDeposits);
    setMonth(month);
    setYear(year);
  };

  const handleAmountInput = (amount: string) => {
    setAmount(amount);
  };

  return (
    <CalculatorContainer data-test="component-calculator-input">
      <InputsContainer>
        <LabelText>Total Amount</LabelText>
        <InputCurrency
          icon={DollarSignIcon}
          onChangeCallback={handleAmountInput}
        />
      </InputsContainer>
      <InputsContainer>
        <LabelText>Reach goal by</LabelText>
        <DateInput
          iconSrcRight={arrowIconRight}
          iconSrcLeft={arrowIconLeft}
          differenceDatesCallback={handleMonthDiff}
        />
      </InputsContainer>
    </CalculatorContainer>
  );
};

export default CalculatorInputs;
