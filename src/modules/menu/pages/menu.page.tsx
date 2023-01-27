import { ShowInfo } from '@app/common/components/show-info/show-info.component';
import { useGetMenuQuery, useGetSettingQuery } from '@app/core/types';
import { Helmet } from 'react-helmet';
import { HelpIn } from '../components/help-in/help-in.component';
import { MenuCategory } from '../components/menu-category/menu-category.component';
import { MenuListLoading } from '../components/menu-list-loading/menu-item-list-loading.component';

export const MenuPage = () => {
  const { data, loading, error } = useGetMenuQuery();
  const { loading: loadingSetting } = useGetSettingQuery();

  if (error) {
    return (
      <ShowInfo type={'error'}>
        <p> Упс сталася помилка 😥</p>
        <p> Спробуйте трохи пізніше</p>
      </ShowInfo>
    );
  }

  if (loading || loadingSetting) {
    return <MenuListLoading items={9} />;
  }

  if (!data) {
    return (
      <ShowInfo type={'info'}>
        <p>Нажаль, меню пусте 😕</p>
      </ShowInfo>
    );
  }

  return (
    <>
      <Helmet>
        <title>Меню</title>
      </Helmet>
      <div className="flex flex-col gap-12 mb-12">
        {data.categories.map(category => (
          <MenuCategory data={category} key={`menu-page-${category.id}`} />
        ))}
      </div>
      <HelpIn />
    </>
  );
};
