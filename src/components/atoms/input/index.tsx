import React, { ReactNode } from 'react';
import styled from 'styled-components';

import CurrencyInput from 'react-currency-input';

interface InputProps {
  icon?: string;
  backgroundColor?: string;
}

const InputContainer = styled.div`
  display: flex;
  border: 1px solid #e1e8ed;
  width: 100%;
`;

const IconContainer = styled.img<InputProps>`
  width: 56px;
  height: 56px;
  padding: 1.6rem;
  background-color: ${(props) => props.backgroundColor};
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
  if (props.icon) {
    return (
      <InputContainer data-test="component-value-input">
        <IconContainer
          {...props}
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
          // onChangeEvent={(e) => {
          //   handleChange(e.target.value);
          // }}
          maxLength="12"
          // value={amount}
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
        <Input />
      </InputContainer>
    );
  }
}
