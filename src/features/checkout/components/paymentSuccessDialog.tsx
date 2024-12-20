import React from 'react';
import BaseDialog from '@/components/baseDialog';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface PaymentSuccessDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentSuccessDialog: React.FC<PaymentSuccessDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
    onClose();
  };
  return (
    <BaseDialog isOpen={isOpen} onClose={handleClose}>
      <div className="text-center">
        <CheckCircleIcon className="w-24 h-24 text-green-500 mx-auto mb-4" />
        <p className="text-lg font-medium text-green-600">
          {t('checkout.paymentSuccessTitle')}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          {t('checkout.paymentSuccessMsg')}
        </p>
      </div>
    </BaseDialog>
  );
};

export default PaymentSuccessDialog;
