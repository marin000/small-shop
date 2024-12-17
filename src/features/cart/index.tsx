import { useToastContext } from '@/providers/toastContext';
import { useTranslation } from 'react-i18next';

const Cart: React.FC = () => {
  const { t } = useTranslation();
  const { showToast } = useToastContext();

  return <div className="container mx-auto py-8">cart</div>;
};

export default Cart;
