import React from 'react';
import BaseInput from '@/components/baseInput';
import BaseCard from '@/components/baseCard';
import { useTranslation } from 'react-i18next';
import { UserAddress } from '@/types/user';

interface AddressDetailsProps {
  userAddress?: UserAddress;
}

const AddressDetails: React.FC<AddressDetailsProps> = ({
  userAddress,
}) => {
  const { t } = useTranslation();
  const { address, city, state, postalCode, country } =
    userAddress || {};

  return (
    <BaseCard title={t('checkout.addressDetails')} className="mb-6">
      <div className="space-y-4">
        <BaseInput
          label={t('checkout.address')}
          type="text"
          value={address || ''}
          placeholder={t('checkout.address')}
          disabled
        />
        <BaseInput
          label={t('checkout.city')}
          type="text"
          value={city || ''}
          placeholder={t('checkout.city')}
          disabled
        />
        <BaseInput
          label={t('checkout.state')}
          type="text"
          value={state || ''}
          placeholder={t('checkout.state')}
          disabled
        />
        <BaseInput
          label={t('checkout.postalCode')}
          type="text"
          value={postalCode || ''}
          placeholder={t('checkout.postalCode')}
          disabled
        />
        <BaseInput
          label={t('checkout.country')}
          type="text"
          value={country || ''}
          placeholder={t('checkout.country')}
          disabled
        />
      </div>
    </BaseCard>
  );
};

export default AddressDetails;
