import CartPage from '@/pages/cart';
import DashboardPage from '@/pages/dashboard';
import LoginPage from '@/pages/login';
import { Routes, Route } from 'react-router-dom';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default MainRouter;
