import AuthGuard from '@/guards/authGuard';
import CartPage from '@/pages/cart';
import CheckoutPage from '@/pages/checkout';
import DashboardPage from '@/pages/dashboard';
import LoginPage from '@/pages/login';
import ProfilePage from '@/pages/profile';
import { Routes, Route } from 'react-router-dom';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route
        path="/checkout"
        element={
          <AuthGuard>
            <CheckoutPage />
          </AuthGuard>
        }
      />
    </Routes>
  );
};

export default MainRouter;
