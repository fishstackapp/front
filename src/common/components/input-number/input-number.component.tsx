import React, { forwardRef, useId, useState } from 'react';
import { ReactComponent as ExclamationCircleSolidIcon } from '@app/assets/icons/exclamation-circle-solid.svg';
import { ReactComponent as Minus16Icon } from '@app/assets/icons/minus-16.svg';
import { ReactComponent as Plus16Icon } from '@app/assets/icons/plus-16.svg';
import { useInputClasses } from './use-input-number-classes';
import { InputNumberProps, InputNumberSize } from './input-number.types';

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      error,
      fullWidth,
      setValue,
      value,
      size = InputNumberSize.base,
      onBlur,
      hideErrorMessage = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();

    const [isFocused, setIsFocused] = useState(false);

    const {
      inputClasses,
      inputWrapperClasses,
      buttonMinusClasses,
      buttonPlusClasses,
      buttonIconsClasses,
      errorMarkClasses,
    } = useInputClasses(isFocused, size, error, fullWidth, hideErrorMessage);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    };

    const onHandleDecrement = () => {
      if (setValue && value) {
        setValue(value - 1);
      }
    };

    const onHandleIncrement = () => {
      if (setValue && value) {
        setValue(value + 1);
      }
    };

    return (
      <div>
        <label htmlFor={inputId} className="mb-1 block text-sm font-medium text-gray-900">
          {label}
        </label>
        <div className={inputWrapperClasses}>
          <button className={buttonMinusClasses} onClick={onHandleDecrement}>
            <Minus16Icon className={buttonIconsClasses} />
          </button>
          <input
            id={inputId}
            className={inputClasses}
            ref={ref}
            type="number"
            value={value ?? 0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {error && <ExclamationCircleSolidIcon className={errorMarkClasses} />}
          <button className={buttonPlusClasses} onClick={onHandleIncrement}>
            <Plus16Icon className={buttonIconsClasses} />
          </button>
        </div>
        {!hideErrorMessage && (
          <span
            className="mt-2 block text-sm text-red-600"
            dangerouslySetInnerHTML={{ __html: error || '&nbsp;' }}
          />
        )}
      </div>
    );
  }
);
