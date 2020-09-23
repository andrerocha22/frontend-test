import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input';

import { InputContainer, IconContainer } from './styles';

interface InputProps {
  icon?: string;
  onChangeCallback: (amount: string) => void;
}

export const InputCurrency: React.FunctionComponent<InputProps> = ({
  icon,
  onChangeCallback,
}) => {
  const [amount, setAmount] = useState<string>();
  if (icon) {
    return (
      <InputContainer data-test="component-currency-input-with-icon">
        <IconContainer src={icon} data-test="component-currency-input-icon" />

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
            onChangeCallback(e.target.value);
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
      <InputContainer data-test="component-currency-input">
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
            onChangeCallback(e.target.value);
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
};
