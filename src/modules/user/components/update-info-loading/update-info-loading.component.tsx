import { InputLoading } from '@app/common/components/input-loading/input-loading.component';
import { FC } from 'react';

interface UpdateInfoLoadingProps {}

export const UpdateInfoLoading: FC<UpdateInfoLoadingProps> = () => {
  return (
    <div className='w-ful'>
      <div className="mb-14 flex gap-9">
        <div className="flex w-1/2 flex-col gap-6">
          <InputLoading />
          <InputLoading />
        </div>
        <div className="flex w-1/2 flex-col gap-6">
          <InputLoading />
        </div>
      </div>
    </div>
  );
};
