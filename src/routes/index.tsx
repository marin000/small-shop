import CartPage from '@/pages/cart';
import DashboardPage from '@/pages/dashboard';
import { Routes, Route } from 'react-router-dom';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MainRouter;
