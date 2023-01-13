import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useGetCategoriesQuery } from './core/types';
import { isLoginReactive } from './modules/auth/store/reactive-vars';
import { Header } from './common/components/header/header.component';
import { Footer } from './common/components/footer/footer.component';
import { MenuPage } from './modules/menu/pages/menu.page';
import { LoginPage } from './modules/auth/pages/login.page';
import { ProfilePage } from './modules/user/pages/profile.page';
import { PrivateRoute } from './common/components/routes/private-route/private-route.component';
import { CartSidebar } from './modules/cart/components/cart-sidebar/cart-sidebar.component';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    isLoginReactive(Boolean(token));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar items={[
          {
            image: 'menu/menu-1673478636',
            title: "Плотва в'ялена",
            count: 2,
            price: 154,
          },
          {
            image: 'menu/menu-1673478636',
            title: "Плотва з ікрою",
            count: 3,
            price: 120,
          },
          {
            image: 'menu/menu-1673478636',
            title: "Плотва в'ялена",
            count: 1,
            price: 85,
          },
        ]} />
      <div className="mx-12 mb-24 mt-24">
        <Routes>
          <Route path="/" element={<MenuPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
