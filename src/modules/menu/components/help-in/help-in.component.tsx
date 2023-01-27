import { FC } from 'react';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as ArrowRightSvg } from '@app/assets/icons/arrow-right.svg';
import { ReactComponent as ArrowBottomSvg } from '@app/assets/icons/arrow-bottom.svg';

interface HelpInProps {}

export const HelpIn: FC<HelpInProps> = () => {
  const arrow = useMediaQuery({ query: '(min-width: 640px)' });

  return (
    <div className="mx-auto max-w-7xl border-y-2 border-dashed p-2">
      <div className="text-sm sm:text-xs lg:text-base">
        <h2 className="mb-4 text-center text-base font-medium">Як замовити смаколики</h2>

        <ul className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:justify-between lg:gap-6">
          <li className="max-w-3/4 sm:max-w-1/4">
            <p>Додати до кошика улюблені смаколики</p>
          </li>
          {arrow ? (
            <ArrowRightSvg width={40} height={40} />
          ) : (
            <ArrowBottomSvg width={30} height={30} />
          )}
          <li className="max-w-3/4 sm:max-w-1/4">
            <p>Перейти до кошика, заповнити всі важливі поля та підтвердити замовлення</p>
          </li>
          {arrow ? (
            <ArrowRightSvg width={40} height={40} />
          ) : (
            <ArrowBottomSvg width={30} height={30} />
          )}
          <li className="max-w-3/4 sm:max-w-1/4">
            <p>Очікувати дзвінка менеджера, він зв'яжеться з вами у найближчий час</p>
          </li>
          {arrow ? (
            <ArrowRightSvg width={40} height={40} />
          ) : (
            <ArrowBottomSvg width={30} height={30} />
          )}
          <li className="max-w-3/4 sm:max-w-1/4">
            <p>Після уточнення замовлення чекати повідомлення з Нової Пошти</p>
          </li>
        </ul>
      </div>
    </div>
  );
};
