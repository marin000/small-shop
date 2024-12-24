import React, { useState } from 'react';
import { useGetUser } from '@/api/getUser';
import BaseButton from '@/components/baseButton';
import LoadFailed from '@/components/loadFailed';
import LoadingSpinner from '@/components/loadingSpinner';
import { useTranslation } from 'react-i18next';
import { checkoutFormSchema } from './validation/checkoutFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import AddressDetails from './components/addressDetails';
import CardDetails from './components/cardDetails';
import useCartActions from '@/hooks/useCartActions';
import PaymentSuccessDialog from './components/paymentSuccessDialog';
import useCartStore from '@/store/cartStore';
import useUserActions from '@/hooks/useUserActions';
import { cvcNumber } from '@/types/user';

const Checkout: React.FC = () => {
  const { t } = useTranslation();

  const { getUserDetails } = useUserActions();
  const loggedInUser = getUserDetails();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { getTotalPrice } = useCartActions();
  const totalPrice = getTotalPrice();

  const { clearCart } = useCartStore((state) => state);

  const { data, isLoading, isError } = useGetUser(loggedInUser?.id);

  const { address, bank } = data || {};

  const formOptions = {
    resolver: zodResolver(checkoutFormSchema(t)),
    mode: 'onChange' as const,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<cvcNumber>(formOptions);

  const onSubmit: SubmitHandler<cvcNumber> = () => {
    setIsDialogOpen(true);
    clearCart();
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner width="80" height="80" />
      </div>
    );
  }

  if (isError) {
    return <LoadFailed message={t('checkout.loadFailed')} />;
  }

  return (
    <div className="w-full max-w-lg mx-auto py-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-3xl mb-6">{t('checkout.title')}</h2>
        <AddressDetails userAddress={address} />
        <CardDetails
          bank={bank}
          register={register}
          errors={errors}
        />
        <BaseButton
          label={`${t('checkout.payButton')} ${totalPrice}€`}
          type="submit"
          variant="primary"
          className="w-full mt-4"
          disabled={!isValid || isLoading}
        />
      </form>
      <PaymentSuccessDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Checkout;
