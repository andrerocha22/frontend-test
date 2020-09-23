import React from 'react';
import Header from './components/organisms/Header';
import SavingGoal from './pages/SavingGoal';

const App: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <SavingGoal />
    </>
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
