import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <MainRouter />
    </Router>
  );
};
export default App;
