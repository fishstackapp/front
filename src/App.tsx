import { Header } from './common/components/header/header.component';
import { Footer } from './common/components/footer/footer.component';
import { MenuPage } from './modules/menu/pages/menu.page';
import { useGetCategoriesQuery } from './core/types';

export const App = () => {
  const {data, loading} = useGetCategoriesQuery()

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories}/>
      <div className="mx-12 mb-24 mt-24">
        <MenuPage />
      </div>
      <Footer />
    </div>
  );
};
