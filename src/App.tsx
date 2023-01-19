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
import { CheckoutPage } from './modules/checkout/pages/checkout.page';
import { ThankYouPage } from './modules/checkout/pages/thank-you.page';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    isLoginReactive(Boolean(token));
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar />
      <div className="mx-6 sm:mx-12 my-20 sm:my-24">
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
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
