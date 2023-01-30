import * as yup from 'yup';
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
    .required("Поле обов'язкове!")
    .matches(phoneRegexp, 'Введіть коректний номер телефону. Приклад: +380681234567'),
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
  const { control, handleSubmit, reset } = useForm<CheckoutFormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: '',
      comment: '',
      paymentType: Payment_Types_Enum.Card,
    },
  });

  const submitForm = async (values: CheckoutFormValues) => {
    if (options?.callback) {
      try {
        await options?.callback(values);
        toast.success('Замовлення створене!');
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { control, onSubmit, reset };
};
