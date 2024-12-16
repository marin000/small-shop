import React, { useState } from 'react';
import { Product } from '@/types/product';
import BaseDialog from '@/components/baseDialog';
import BaseThumbnail from '@/components/baseThumbnail';
import ProductDetailsTab from '../tabs/productDetailsTab';
import ProductReviewsTab from '../tabs/productReviewsTab';
import TabsContainer from '@/components/tabsContainer';
import { useTranslation } from 'react-i18next';

interface ProductDialogProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDialog: React.FC<ProductDialogProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();
  const detailsTabLabel = t('dashboard.detailsTab');
  const reviewTabLabel = t('dashboard.reviewTab');
  const [activeTab, setActiveTab] = useState(detailsTabLabel);
  const { title, thumbnail, details, reviews } = product;

  return (
    <BaseDialog isOpen={isOpen} onClose={onClose} title={title}>
      <div className="flex flex-col">
        <BaseThumbnail
          thumbnail={thumbnail}
          title={title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <TabsContainer
          activeTab={activeTab}
          onTabClick={setActiveTab}
          tabs={[detailsTabLabel, reviewTabLabel]}
        />
        <div className="mt-4">
          {activeTab === detailsTabLabel && (
            <ProductDetailsTab productDetails={details} />
          )}
          {activeTab === reviewTabLabel && (
            <ProductReviewsTab reviews={reviews} />
          )}
        </div>
      </div>
    </BaseDialog>
  );
};

export default ProductDialog;
