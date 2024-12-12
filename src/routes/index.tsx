import DashboardPage from '@/pages/dashboard';
import { Routes, Route } from 'react-router-dom';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
};

export default MainRouter;
