import React from 'react';
import Header from './components/organisms/Header';
import SavingGoal from './pages/SavingGoal';

const App: React.FunctionComponent = () => {
  return (
    <div className="app">
      <Header />
      <SavingGoal />
    </div>
  );
};

export default App;
