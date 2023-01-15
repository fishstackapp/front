import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { phoneRegexp } from '@app/common/utils/regex';
import { yupResolver } from '@hookform/resolvers/yup';
import { CheckoutFormValues, useCheckoutFormOptions } from './checkout-form.types';

export const validation = yup.object({
  name: yup.string().required("Поле обов'язкове!"),
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'Введіть коректний номер телефону')
    .required('Введіть номер телефону'),
  address: yup.string().required("Поле обов'язкове!"),
  comment: yup.string().notRequired(),
  paymentType: yup.string().oneOf(['card, cash']),
});



export const useCheckoutForm = (options?: useCheckoutFormOptions) => {
  const { control, handleSubmit } = useForm<CheckoutFormValues>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: '',
      phoneNumber: '',
      address: '',
      comment: '',
      paymentType: 'card',
    },
  });

  const submitForm = async (values: CheckoutFormValues) => {
    console.log(values)
  };

  const onSubmit = handleSubmit(submitForm);

  return {control, onSubmit};
}