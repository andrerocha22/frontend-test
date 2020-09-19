import * as React from 'react';
import { ButtonPrimary } from './components/atoms/button';

const App: React.FunctionComponent = () => {
  return (
    <div>
      Origin Frontend Take Home
      <ButtonPrimary
        handleClick={() => console.log('teste clique')}
        color="#fff"
        backgroundColor="#004409"
      >
        clique aqui
      </ButtonPrimary>
    </div>
  );
};

export default App;
