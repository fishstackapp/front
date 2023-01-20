import { FC, useEffect } from 'react';
import { Controller } from 'react-hook-form';
import { UpdateInfoProps } from './update-info.types';
import { UseUpdateInfoForm } from './use-update-info-form';
import { ActionPaperFooter } from '@app/common/components/action-paper-footer/action-paper-footer.component';
import { ActionPaper } from '@app/common/components/action-paper/action-paper.component';
import { Button } from '@app/common/components/button/button.component';
import { Input } from '@app/common/components/input/input.component';
import { UpdateInfoLoading } from '../update-info-loading/update-info-loading.component';

export const UpdateInfo: FC<UpdateInfoProps> = ({
  initialValues,
  onSubmitCallback,
  isUpdating,
  isLoading,
}) => {
  const { onSubmit, isSubmitting, control, reset } = UseUpdateInfoForm(
    initialValues,
    onSubmitCallback
  );

  useEffect(() => {
    if (!isUpdating) {
      reset({
        name: initialValues?.name ?? '',
        address: initialValues?.address ?? '',
        phoneNumber: initialValues?.phone ?? '',
      });
    }
  }, [initialValues, isUpdating]);

  const actionPaperFooter = (
    <ActionPaperFooter>
      <Button type="submit" onClick={onSubmit} disabled={isSubmitting}>
        Зберегти
      </Button>
    </ActionPaperFooter>
  );

  return (
    <ActionPaper title="Персональні дані" footer={actionPaperFooter}>
      {isLoading ? (
        <UpdateInfoLoading/>
      ) : (
        <form className="flex sm:gap-9 flex-col sm:flex-row" onSubmit={onSubmit}>
        <div className="w-full sm:w-1/2">
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
                disabled
              />
            )}
          />
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Адреса"
                placeholder="Введіть адресу"
                fullWidth
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>
        <div className="w-full sm:w-1/2">
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Input
                label="Им'я"
                placeholder="Введіть ім'я"
                fullWidth
                error={fieldState.error?.message}
                {...field}
              />
            )}
          />
        </div>
      </form>
      )}
    </ActionPaper>
  );
};
