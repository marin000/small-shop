import React, { ReactNode } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react';
import CloseButton from '../closeButton';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

const BaseDialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/30 backdrop-blur-sm duration-300 ease-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
        <div className="bg-white rounded-lg max-w-xl w-full p-6 shadow-lg overflow-hidden">
          <div className="max-h-[80vh] overflow-y-auto">
            <DialogPanel
              className="rounded-xl bg-white p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton onClick={onClose} />
              <DialogTitle className="text-2xl font-bold mb-4">
                {title}
              </DialogTitle>
              {children}
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default BaseDialog;
