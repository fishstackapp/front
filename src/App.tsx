import { Route, Routes } from 'react-router-dom';
import { useGetCategoriesQuery } from './core/types';
import { Header } from './common/components/header/header.component';
import { Footer } from './common/components/footer/footer.component';
import { MenuPage } from './modules/menu/pages/menu.page';
import { LoginPage } from './modules/auth/pages/login.page';
import { isLoginReactive } from './modules/auth/store/reactive-vars';
import { useEffect } from 'react';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  useEffect(() => {
    const token = localStorage.getItem('jwt')
    isLoginReactive(Boolean(token))
  }, [])
  

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <div className="mx-12 mb-24 mt-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
