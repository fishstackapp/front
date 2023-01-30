import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@app/common/components/input/input.component';
import { TextArea } from '@app/common/components/text-area/text-area.component';
import { RadioGroup } from '@app/common/components/radio-group/radio-group.component';
import { Button } from '@app/common/components/button/button.component';
import { CheckoutFormProps } from './checkout-form.types';
import { useCheckoutForm } from './use-checkout-form';
import { Payment_Types_Enum } from '@app/core/types';

const paymentTypeOptions = [
  { label: 'При отриманні', value: Payment_Types_Enum.Card },
  // { label: 'Готівка', value: Payment_Types_Enum.Cash },
  // { label: "Онлайн", value: Payment_Types_Enum.Online },
];

export const CheckoutForm: FC<CheckoutFormProps> = ({submitCallback, initialValues}) => {
  const {control, onSubmit, reset} = useCheckoutForm({callback: submitCallback})

  useEffect(() => {
    reset({
      name: initialValues?.name ?? '',
      address: initialValues?.address ?? '',
      phoneNumber: initialValues?.phone ?? '',
    });
  }, [initialValues]);

  return (
    <form className='flex flex-col gap-2' onSubmit={onSubmit}>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Ім'я"
            placeholder="Ваше ім'я"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Телефон"
            placeholder="Ваш телефон +380..."
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <Input
            {...field}
            fullWidth
            label="Адреса пошти"
            placeholder="Дніпро, 23"
            error={fieldState.error?.message}
          />
        )}
      />
      <Controller
        name="comment"
        control={control}
        render={({ field }) => (
          <TextArea
            {...field}
            fullWidth
            label="Коментар до замовлення"
            placeholder="Будь-яка корисна інформація"
          />
        )}
      />
      <Controller
        name="paymentType"
        control={control}
        render={({ field }) => (
          <RadioGroup options={paymentTypeOptions} label="Виберіть спосіб оплати" {...field} />
        )}
      />
      <Button type="submit" fullWidth>
        Підтвердити замовлення
      </Button>
    </form>
  );
};
