import { Helmet } from 'react-helmet';

export const PaymentPage = () => {
  return (
    <>
      <Helmet>
        <title>Доставка</title>
      </Helmet>
      <div className="">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="mb-6 sm:mb-10 text-xl sm:text-4xl font-bold text-gray-800">Доставка та оплата</h2>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Купуючи товари в магазині «fishstack.online», Ви отримуєте свою посилку Новою Поштою.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Вартість доставки згідно з тарифами Нової Пошти.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Товар вирушає тричі на тиждень: понеділок середа та п’ятниця.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Прийом заявок здійснюється цілодобово.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Підтвердження та відправка товару після уточнення менеджера по телефону.
          </p>
          <p className="text-sm sm:text-lg font-normal text-gray-700 mb-4 sm:mb-6">
            Замовлення подаються менеджеру з прийому замовлень та приймаються у порядку черги.
          </p>
        </div>
      </div>
    </>
  );
};
