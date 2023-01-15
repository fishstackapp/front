import { Helmet } from 'react-helmet';
import { useUpdateCustomerDataMutation } from '@app/core/types';
import { Container } from '@app/common/components/container/container.component';
import { useGetMeDataQuery } from '@app/modules/auth/hooks/use-get-customer-data-query';
import { UpdateInfoLoading } from '../components/update-info-loading/update-info-loading.component';
import { UpdateInfo } from '../components/update-info/update-info.component';
import { UpdateInfoFormValues } from '../components/update-info/update-info.types';

export const ProfilePage = () => {
  const { data, loading: profileDataLoading } = useGetMeDataQuery();
  const [updateCustomerData, { loading: isProfileUpdating }] = useUpdateCustomerDataMutation();

  if (profileDataLoading) {
    return (
      <Container>
        <UpdateInfoLoading />
      </Container>
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
      <Container>
        <UpdateInfo
          initialValues={data}
          onSubmitCallback={onSubmitCallback}
          isUpdating={isProfileUpdating}
        />
      </Container>
    </>
  );
};
