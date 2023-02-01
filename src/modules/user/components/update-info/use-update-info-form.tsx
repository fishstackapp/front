import * as yup from 'yup';
import { phoneRegexp, nameRegexp, addressRegexp } from '@app/common/utils/regex';
import { useForm } from 'react-hook-form';
import { UpdateInfoFormValues } from './update-info.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FrontCustomer } from '../../types/user';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
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
});

export const UseUpdateInfoForm = (
  initialValues?: FrontCustomer,
  onSubmitCallback?: (values: UpdateInfoFormValues) => Promise<void>
) => {
  const {
    control,
    formState: { isSubmitting },
    handleSubmit,
    reset,
  } = useForm<UpdateInfoFormValues>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      phoneNumber: initialValues?.phone || '+380',
      name: initialValues?.name || '',
      address: initialValues?.address || '',
    },
  });

  const submitForm = async (values: UpdateInfoFormValues) => {
    if (onSubmitCallback) {
      try {
        await onSubmitCallback(values);
        toast.success('Дані оновлені!');
      } catch (e) {
        toast.error((e as Error).message);
      }
    }
  };

  const onSubmit = handleSubmit(submitForm);

  return { onSubmit, isSubmitting, control, reset };
};
