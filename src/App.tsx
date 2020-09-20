import * as React from 'react';
import { ButtonPrimary } from './components/atoms/button';
import icon$ from './assets/icons/$.svg';
import Card from './components/atoms/card';
import {
  TitleText,
  BoldText,
  SecondaryText,
  PrimaryText,
} from './components/atoms/typography';
import ValueInputContainer from './components/molecules/valueInput';

const App: React.FunctionComponent = () => {
  return (
    <div
      style={{
        marginTop: '100px',
        maxWidth: '560px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '40px',
      }}
    >
      Origin Frontend Take Home
      <ButtonPrimary
        handleClick={() => console.log('teste clique')}
        color="#FFFFFF"
        backgroundColor="#1B31A8"
        borderRadius="2rem"
      >
        <h2>Confirm</h2>
      </ButtonPrimary>
      <TitleText>
        Let's plan your <BoldText>saving goal</BoldText> .
      </TitleText>
      <PrimaryText>Buy a house</PrimaryText>
      <SecondaryText>Saving Goal</SecondaryText>
      <ValueInputContainer
        icon={icon$}
        iconBackgroundColor="#F4F8FA"
        label="Total amount"
      />
      <Card
        primaryInfo="Monthly Amount"
        amount="$521"
        secondaryInfo="You’re planning 48 monthly deposits to reach your $25,000 goal by October 2020."
      />
    </div>
  );
};

export default App;
