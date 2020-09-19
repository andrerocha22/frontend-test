import * as React from 'react';
import { ButtonPrimary } from './components/atoms/button';
import arrow from './assets/icons/$.svg';
import {ValueInput} from './components/atoms/input';

const App: React.FunctionComponent = () => {
  return (
    <div style={{ marginTop: '100px' }}>
      Origin Frontend Take Home
      <ButtonPrimary
        handleClick={() => console.log('teste clique')}
        color="#FFFFFF"
        backgroundColor="#1B31A8"
        borderRadius="2rem"
      >
        <h2>Confirm</h2>
      </ButtonPrimary>
      <ValueInput icon={arrow} backgroundColor="#F4F8FA"/>
    </div>
  );
};

export default App;
