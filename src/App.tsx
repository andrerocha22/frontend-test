import * as React from 'react';
import { ButtonPrimary } from './components/atoms/button';
import arrow from './assets/icons/$.svg';
import { ValueInput } from './components/atoms/input';
import Card from './components/atoms/card';
import { TitleText, BoldText } from './components/atoms/typography';

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
      <ValueInput icon={arrow} backgroundColor="#F4F8FA" />
      <TitleText>
        Let's plan your <BoldText>saving goal</BoldText> .
      </TitleText>
      <Card
        primaryInfo="Monthly Amount"
        amount="$521"
        secondaryInfo="You’re planning 48 monthly deposits to reach your $25,000 goal by October 2020."
      />
    </div>
  );
};

export default App;
