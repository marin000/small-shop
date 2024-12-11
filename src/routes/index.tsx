import { Routes, Route } from 'react-router-dom';
import HomePage from '@/pages/home';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default MainRouter;
