import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { Input } from '@app/common/components/input/input.component';
import { TextArea } from '@app/common/components/text-area/text-area.component';
import { RadioGroup } from '@app/common/components/radio-group/radio-group.component';
import { Button } from '@app/common/components/button/button.component';
import { CheckoutFormProps } from './checkout-form.types';
import { useCheckoutForm } from './use-checkout-form';





const paymentTypeOptions = [
  { label: 'Картка', value: 'card' },
  { label: 'Готівка', value: 'cash' },
];

export const CheckoutForm: FC<CheckoutFormProps> = () => {
  const {control, onSubmit} = useCheckoutForm()

  

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
            placeholder="Введіть ваше ім'я"
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
            placeholder="Введіть ваш телефон"
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
            label="Адреса"
            placeholder="Введіть вашу адресу"
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
            placeholder="Введіть будь-яку корисну інформацію"
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
