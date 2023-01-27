import { Route, Routes } from 'react-router-dom';
import { useGetCategoriesQuery } from './core/types';
import { Header } from './common/components/header/header.component';
import { Footer } from './modules/footer/components/footer.component';
import { MenuPage } from './modules/menu/pages/menu.page';
import { LoginPage } from './modules/auth/pages/login.page';
import { ProfilePage } from './modules/user/pages/profile.page';
import { PrivateRoute } from './common/components/routes/private-route/private-route.component';
import { CartSidebar } from './modules/cart/components/cart-sidebar/cart-sidebar.component';
import { CheckoutPage } from './modules/checkout/pages/checkout.page';
import { ThankYouPage } from './modules/checkout/pages/thank-you.page';
import { useAuthState } from './modules/auth/hooks/use-auth-state';
import { PaymentPage } from './modules/footer/pages/payment.page';
import { TurningPage } from './modules/footer/pages/turning.page';
import { ContractPage } from './modules/footer/pages/contract.page';

export const App = () => {
  const { data, loading } = useGetCategoriesQuery();

  useAuthState();

  return (
    <div className="flex min-h-screen flex-col">
      <Header isLoading={loading} categories={data?.categories} />
      <CartSidebar />
      <div className="mx-6 sm:mx-12 mt-20 sm:mt-24 mb-12">
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
          <Route path="/contract" element={<ContractPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/turning" element={<TurningPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/thank-you" element={<ThankYouPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
