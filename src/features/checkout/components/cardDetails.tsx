import React from 'react';
import BaseInput from '@/components/baseInput';
import BaseCard from '@/components/baseCard';
import { useTranslation } from 'react-i18next';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { formatCardNumber } from '@/utils/helper';
import { UserBank } from '@/types/user';

interface CardDetailsProps {
  bank?: UserBank;
  register: UseFormRegister<any>;
  errors: FieldErrors;
}

const CardDetails: React.FC<CardDetailsProps> = ({
  bank,
  register,
  errors,
}) => {
  const { t } = useTranslation();
  const { cardExpire, cardNumber } = bank || {};

  return (
    <BaseCard title={t('checkout.paymentDetails')} className="mb-6">
      <div className="space-y-4">
        <BaseInput
          label={t('checkout.cardNumber')}
          type="text"
          value={cardNumber ? formatCardNumber(cardNumber) : ''}
          placeholder={t('checkout.cardNumber')}
          disabled
        />
        <div className="flex space-x-4">
          <BaseInput
            label={t('checkout.cardExpire')}
            type="text"
            value={cardExpire || ''}
            placeholder={t('checkout.cardExpire')}
            disabled
          />
          <BaseInput
            label={t('checkout.cvc')}
            type="text"
            required
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={4}
            className="w-1/2 p-2 border border-gray-300 rounded"
            placeholder={t('checkout.cvc')}
            onInput={(e) => {
              const input = e.target as HTMLInputElement;
              input.value = input.value.replace(/\D/g, '');
            }}
            {...register('cvc')}
            error={errors.cvc?.message as string}
          />
        </div>
      </div>
    </BaseCard>
  );
};

export default CardDetails;
