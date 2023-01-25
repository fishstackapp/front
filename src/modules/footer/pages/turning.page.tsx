import { Helmet } from 'react-helmet';

export const TurningPage = () => {
  return (
    <>
      <Helmet>
        <title>Доставка</title>
      </Helmet>
      <div className="">
        <div className="mx-auto max-w-screen-lg">
          <h2 className="mb-6 text-xl font-bold text-gray-800 sm:mb-10 sm:text-4xl">
            Умови повернення та обміну
          </h2>
          <p className="mb-4 text-sm font-normal text-gray-700 sm:mb-6 sm:text-lg">
            Якщо товар не відповідає заявленим вимогам: свіжість, стан — ми робимо заміну
            на новий або аналогічний, обов'язково після фото-, відео-фіксації.
          </p>
          <p className="mb-4 text-sm font-normal text-gray-700 sm:mb-6 sm:text-lg">
            Якщо товару немає у наявності — повертаємо кошти.
          </p>
          <p className="mb-4 text-sm font-normal text-gray-700 sm:mb-6 sm:text-lg">
            Розгляд притензії та повернення відбувається протягом доби.
          </p>
          <p className="mb-4 text-sm font-normal text-gray-700 sm:mb-6 sm:text-lg">
            За несвоєчасне отримання товару та псування його через тривале зберігання (більше 4
            днів) у відділенні пошти, відправник відповідальності не несе.
          </p>
        </div>
      </div>
    </>
  );
};
