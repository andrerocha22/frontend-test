import React, { useState } from 'react';
import { ButtonPrimary } from './components/atoms/button';
import Card from './components/atoms/card';
import { TitleText, BoldText } from './components/atoms/typography';
const houseIcon = require('./assets/icons/house.svg') as string;

import CalculatorInputs from './components/organisms/CalculatorInputs';
import GoalHero from './components/organisms/GoalHero';

const App: React.FunctionComponent = () => {
  const [months, setMonths] = useState<number>(0);
  const [depositValue, setDepositValue] = useState<string>('');
  const [amount, setAmount] = useState<string>('');

  const handleInputs = (
    months: number,
    depositValue: string,
    amount: string
  ) => {
    setMonths(months);
    setDepositValue(depositValue);
    setAmount(amount);
  };

  const handleConfirmButton = () => {
    alert('Confirmed');
  };

  return (
    <div>
      <TitleText>
        Let's plan your <BoldText>saving goal</BoldText>.
      </TitleText>
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <GoalHero
        title="Buy a house"
        description="Saving goal"
        iconSrc={houseIcon}
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <CalculatorInputs callback={handleInputs} />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <Card
        primaryInfo="Monthly Amount"
        amount={`$${Number(depositValue).toFixed(0)}`}
        secondaryInfo={`You’re planning ${months} monthly deposits to reach your ${amount} goal by October 2020.`}
      />
      <div
        style={{
          marginBottom: '25px',
        }}
      />
      <ButtonPrimary
        handleClick={handleConfirmButton}
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

// import * as React from 'react';
// import SavingGoal from './pages/SavingGoal';
// import Header from './components/Header';

// import './assets/styles/app.scss';

// const App: React.FC = () => {
//   return (
//     <div className="app">
//       <Header />
//       <SavingGoal />
//     </div>
//   );
// };

// export default App;
