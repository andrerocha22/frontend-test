import * as React from 'react';
import { ButtonPrimary } from './components/atoms/button';
import icon$ from './assets/icons/$.svg';
const arrowIcon = require('./assets/icons/arrow.svg') as string;
import Card from './components/atoms/card';
import {
  TitleText,
  BoldText,
  SecondaryText,
  PrimaryText,
} from './components/atoms/typography';
import ValueInputContainer from './components/molecules/valueInput';
import DateInput from './components/molecules/dateInput';

const App: React.FunctionComponent = () => {
  return (
    <div
      style={{
        marginTop: '25px',
        maxWidth: '560px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '40px',
      }}
    >
      <TitleText>
        Let's plan your <BoldText>saving goal</BoldText>.
      </TitleText>
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <PrimaryText>Buy a house</PrimaryText>
      <SecondaryText>Saving Goal</SecondaryText>
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <ValueInputContainer
        icon={icon$}
        iconBackgroundColor="#F4F8FA"
        label="Total amount"
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <DateInput
        label="Reach goal by"
        iconSrc={arrowIcon}
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <Card
        primaryInfo="Monthly Amount"
        amount="$521"
        secondaryInfo="You’re planning 48 monthly deposits to reach your $25,000 goal by October 2020."
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <ButtonPrimary
        handleClick={() => console.log('teste clique')}
        color="#FFFFFF"
        backgroundColor="#1B31A8"
        borderRadius="2rem"
      >
        <h2>Confirm</h2>
      </ButtonPrimary>
    </div>
  );
};

export default App;
