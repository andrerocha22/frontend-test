import React, { useState } from 'react';
import styled from 'styled-components';

import CurrencyInput from 'react-currency-input';

interface InputProps {
  icon?: string;
  backgroundColor?: string;
  onChangeCallback: (amount: string) => void;
}

interface IconProps {
  backgroundColor?: string;
}

const InputContainer = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  width: 100%;
`;

const IconContainer = styled.img<IconProps>`
  width: 56px;
  height: 56px;
  padding: 1.6rem;
  background-color: ${(props) => props.backgroundColor};
  border-right: 1px solid #e1e8ed;
`;

const Input = styled.div`
  display: flex;
  width: 100%;
  background: #ffffff;
  border: none;
  padding: 1.6rem;
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
`;

export function InputCurrency(props: InputProps) {
  const [amount, setAmount] = useState<string>();
  if (props.icon) {
    return (
      <InputContainer data-test="component-value-input">
        <IconContainer
          src={props.icon}
          data-test="component-value-input-icon"
        />

        <CurrencyInput
          className="inputAmount"
          style={{
            display: 'flex',
            width: '100%',
            background: '#ffffff',
            border: 'none',
            padding: '1.6rem',
            fontWeight: '600',
            fontSize: '2rem',
            lineHeight: '2.4rem',
          }}
          onChangeEvent={(e: any) => {
            setAmount(e.target.value);
            props.onChangeCallback(e.target.value);
          }}
          maxLength="12"
          value={amount}
          decimalSeparator="."
          thousandSeparator=","
          selectAllOnFocus
          autoFocus
        />
      </InputContainer>
    );
  }
  {
    return (
      <InputContainer data-test="component-value-input">
        <CurrencyInput
          className="inputAmount"
          style={{
            display: 'flex',
            width: '100%',
            background: '#ffffff',
            border: 'none',
            padding: '1.6rem',
            fontWeight: '600',
            fontSize: '2rem',
            lineHeight: '2.4rem',
          }}
          onChangeEvent={(e: any) => {
            setAmount(e.target.value);
            props.onChangeCallback(e.target.value);
          }}
          maxLength="12"
          value={amount}
          decimalSeparator="."
          thousandSeparator=","
          selectAllOnFocus
          autoFocus
        />
      </InputContainer>
    );
  }
}
