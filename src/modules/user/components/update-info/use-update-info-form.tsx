import * as yup from 'yup';
import { phoneRegexp, minSymbolsRegexp } from '@app/common/utils/regex';
import { useForm } from 'react-hook-form';
import { UpdateInfoFormValues } from './update-info.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { FrontCustomer } from '../../types/user';
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  phoneNumber: yup
    .string()
    .trim()
    .matches(phoneRegexp, 'Введіть коректний номер телефону')
    .required('Введіть номер телефону'),
  name: yup.string().matches(minSymbolsRegexp, {
    excludeEmptyString: true,
    message: 'Введіть мінімум 3 символи!',
  }),
  address: yup.string().matches(minSymbolsRegexp, {
    excludeEmptyString: true,
    message: 'Введіть мінімум 3 символи!',
  }),
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
      phoneNumber: initialValues?.phone,
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
