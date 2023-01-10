import { useUpdateCustomerDataMutation } from '@app/core/types';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-customer-data-query';
import { Helmet } from 'react-helmet';
import { UpdateInfoLoading } from '../components/update-info-loading/update-info-loading.component';
import { UpdateInfo } from '../components/update-info/update-info.component';
import { UpdateInfoFormValues } from '../components/update-info/update-info.types';

export const ProfilePage = () => {
  const { data, loading: profileDataLoading } = useGetMeDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] = useUpdateCustomerDataMutation();

  const containerClasses = 'max-w-5xl mx-auto';

  if (profileDataLoading) {
    return (
      <div className={containerClasses}>
        <UpdateInfoLoading />
      </div>
    );
  }

  const onSubmitCallback = async (values: UpdateInfoFormValues) => {
    await updateCustomerData({
      variables: {
        id: data?.id,
        name: values.name || data?.name,
        address: values.address || data?.address,
      },
    });
  };

  return (
    <>
    <Helmet>
        <title>Профіль</title>
      </Helmet>
      <div className={containerClasses}>
      <UpdateInfo
        initialValues={data}
        onSubmitCallback={onSubmitCallback}
        isUpdating={isProfileUpdating}
      />
    </div>
    </>
  );
};
