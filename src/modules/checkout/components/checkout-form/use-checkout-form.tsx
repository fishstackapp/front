import * as yup from 'yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Payment_Types_Enum } from '@app/core/types';
import { phoneRegexp, addressRegexp, nameRegexp } from '@app/common/utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { CheckoutFormValues, useCheckoutFormOptions } from './checkout-form.types';

export const validation = yup.object({
  name: yup
    .string()
    .required("Поле обов'язкове!")
    .matches(nameRegexp, "Введіть коректне им`я. Приклад: Володимир"),
  phoneNumber: yup
    .string()
    .trim()
    .required('Ваш телефон +380...')
    .matches(phoneRegexp, 'Введіть коректний номер телефону'),
  address: yup
    .string()
    .required("Поле обов'язкове!")
    .matches(addressRegexp, 'Введіть коректну адресу. Приклад: Дніпро, 23'),
  comment: yup.string().notRequired(),
  paymentType: yup
    .string()
    .oneOf([Payment_Types_Enum.Card, Payment_Types_Enum.Cash, Payment_Types_Enum.Online]),
});

export const useCheckoutForm = (options?: useCheckoutFormOptions) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const { control, handleSubmit, reset } = useForm<CheckoutFormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: '',
      phoneNumber: '+380',
      address: '',
      comment: '',
      paymentType: Payment_Types_Enum.Card,
    },
  });

  const submitForm = async (values: CheckoutFormValues) => {
    if (options?.callback) {
      setButtonDisabled(true);
      try {
        await options?.callback(values);
        toast.success('Замовлення створене!');
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit, reset, buttonDisabled };
};
