import { Field, Input } from '@headlessui/react';
import clsx from 'clsx';
import React, { forwardRef, useCallback, useState } from 'react';
import ToggleVisibilityButton from '../toggleVisibilityButton';
import InputFeedback from '../inputFeedback';

interface BaseInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  name?: string;
  type?: string;
  className?: string;
  required?: boolean;
  description?: string;
  disabled?: boolean;
  error?: string;
}

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (props, ref) => {
    const {
      label,
      className,
      id,
      name,
      type = 'text',
      required = false,
      description,
      disabled = false,
      error,
      ...rest
    } = props;
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = useCallback(() => {
      setShowPassword((prevState) => !prevState);
    }, []);

    const isPasswordType = type === 'password';

    const handleKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (type === 'number') {
        const invalidChars = ['e', 'E', '+', '-', '.'];

        if (invalidChars.includes(event.key)) {
          event.preventDefault();
        }
      }

      if (type === 'tel') {
        const allowedKeys = [
          'Backspace',
          'Delete',
          'ArrowLeft',
          'ArrowRight',
          'Tab',
        ];

        if (
          !/[0-9+()-\s]/.test(event.key) &&
          !allowedKeys.includes(event.key)
        ) {
          event.preventDefault();
        }
      }
    };

    return (
      <Field className="mb-4">
        <div>
          {label && (
            <label
              htmlFor={id}
              className="block text-sm font-medium text-gray-700 mb-1 ml-1"
            >
              {label}
            </label>
          )}
          <div className="relative w-full">
            <Input
              ref={ref}
              id={id}
              name={name}
              type={isPasswordType && showPassword ? 'text' : type}
              className={clsx(
                'block w-full px-3 py-2 text-sm bg-gray-100 border placeholder-gray-600 rounded-lg outline-none appearance-none data-[focus]:border-blue-500 data-[disabled]:bg-white data-[disabled]:cursor-not-allowed',
                isPasswordType && 'pr-12',
                className
              )}
              onKeyDown={handleKeyDown}
              disabled={disabled}
              aria-labelledby={id}
              aria-required={required}
              {...rest}
            />
            {isPasswordType && (
              <div className="absolute inset-y-0 right-2 flex items-center">
                <ToggleVisibilityButton
                  showPassword={showPassword}
                  toggleShowPassword={toggleShowPassword}
                />
              </div>
            )}
          </div>
          <InputFeedback
            id={id}
            error={error}
            description={description}
            errorClass="mb-4"
          />
        </div>
      </Field>
    );
  }
);

BaseInput.displayName = 'BaseInput';

export default BaseInput;
