import { FC, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@app/common/components/button/button.component copy';
import { Input } from '@app/common/components/input/input.component';
import { Counter } from '@app/common/components/counter/counter.component';
import { phoneRegexp } from '@app/common/utils/regex';

interface LoginFormProps {}

interface LoginFormValues {
  phoneNumber: string;
  code: string;
}

enum LoginFormStep {
  first = 'first',
  second = 'second',
}

type LoginFormStapKeys = keyof typeof LoginFormStep;

const generateValidationSchema = (step: LoginFormStapKeys) => {
  const baseValidation = {
    phoneNumber: yup.string().trim().matches(phoneRegexp, 'Введіть коректний номер телефону').required('Введіть номер телефону'),
  };

  if (step === LoginFormStep.first) {
    return yup.object(baseValidation);
  }

  return yup.object({
    ...baseValidation,
    code: yup.string().required('Введіть код'),
  });
};

export const LoginForm: FC<LoginFormProps> = () => {
  const [step, setStep] = useState<keyof typeof LoginFormStep>(LoginFormStep.first);

  const { control, handleSubmit } = useForm<LoginFormValues>({
    resolver: yupResolver(generateValidationSchema(step)),
    defaultValues: {
      phoneNumber: '',
      code: '',
    },
  });

  const submitForm = (values: LoginFormValues) => {
    if (step === LoginFormStep.first) {
      setStep(LoginFormStep.second);
      return;
    }
  };

  return (
    <div className="w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="flex flex-col gap-2">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Телефон"
                placeholder="+380*********"
                fullWidth
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
          {step === LoginFormStep.second && (
            <Controller
              name="code"
              control={control}
              render={({ field, fieldState }) => (
                <Input
                  label="Код"
                  placeholder="Введіть код з SMS"
                  fullWidth
                  error={fieldState.error?.message}
                  {...field}
                />
              )}
            />
          )}
          <div className="text-center">
            <Button type="submit">
              {step === LoginFormStep.first ? (
                <span className="text-white">Отримати код</span>
              ) : (
                <span className="text-white">Війти</span>
              )}
            </Button>
          </div>
          {step === LoginFormStep.second && (
            <div>
              <Counter onRestart={() => console.log('qwe')}>Відправити код ще раз</Counter>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
