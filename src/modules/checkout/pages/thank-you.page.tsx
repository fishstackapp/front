import { Button } from '@app/common/components/button/button.component';
import { Link } from 'react-router-dom';

export const ThankYouPage = () => {
  return (
    <div className="text-center ">
      <h1 className="mb-6 text-2xl font-bold text-gray-900 sm:text-3xl">
        Дякуємо за замовлення у 🐟 FishStack
      </h1>
      <h2 className="mb-15 text-base font-medium text-gray-700 sm:text-lg">
        Наш менеджер у найближчий час зв'яжеться з вами!
      </h2>

      <div className="flex items-center justify-center">
        <Button>
          <Link to="/">На головну</Link>
        </Button>
      </div>
    </div>
  );
};
