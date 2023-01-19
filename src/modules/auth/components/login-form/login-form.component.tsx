import { FC, useState } from 'react';
import { Controller } from 'react-hook-form';
import { useLoginForm } from './use-login-form';
import { Button } from '@app/common/components/button/button.component';
import { Input } from '@app/common/components/input/input.component';
import { Counter } from '@app/common/components/counter/counter.component';
import { LoginFormProps, LoginFormStep, LoginFormStepKeys } from './login-form.types';

export const LoginForm: FC<LoginFormProps> = ({ onFirstStepCallback, onSecondStepCallback }) => {
  const [step, setStep] = useState<LoginFormStepKeys>(LoginFormStep.first);

  const { getValues, onSubmit, control, isSubmitting } = useLoginForm(
    step,
    setStep,
    onFirstStepCallback,
    onSecondStepCallback
  );

  const onResend = async () => {
    const phoneNumber = getValues('phoneNumber');

    if (onFirstStepCallback) {
      try {
        await onFirstStepCallback(phoneNumber);
      } catch (error) {}
    }
  };

  return (
    <div className="max-w-112 py-8 px-10 bg-white rounded-lg shadow mx-auto">
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2">
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                type="tel"
                label="Телефон"
                placeholder="+380*********"
                fullWidth
                error={fieldState.error?.message}
                disabled={step === LoginFormStep.second}
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
            <Button type="submit" disabled={isSubmitting}>
              {step === LoginFormStep.first ? (
                <span className="text-white">Отримати код</span>
              ) : (
                <span className="text-white">Війти</span>
              )}
            </Button>
          </div>
          {step === LoginFormStep.second && (
            <div>
              <Counter onRestart={onResend}>Відправити код ще раз</Counter>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
