import { FooterLink } from '../../../common/components/footer-link/footer-link.component';
import { Logo } from '../../../common/components/logo/logo.component';
import { ReactComponent as InstaIcon } from '@app/assets/icons/instagram.svg';
import { ReactComponent as TelegramIcon } from '@app/assets/icons/telegram.svg';
import { ReactComponent as SubmitIcon } from '@app/assets/icons/submit.svg';
import { Input } from '../../../common/components/input/input.component';
import { Button } from '../../../common/components/button/button.component';
import { FooterAboutUs } from '../../../common/components/footer-about-us/footer-about-us.component';

export const Footer = () => {
  const dynamicLink = '_blank';

  return (
    <footer className="flex flex-col flex-wrap items-center justify-center gap-6 bg-gray-900  p-8 sm:flex-row sm:items-start sm:justify-between sm:gap-14 lg:justify-around">
      <div className="text-center sm:text-start">
        <Logo footer />
        <ul className="mt-2 sm:text-start">
          <FooterLink href="tel:+380680707657">+38 068 07 07 657</FooterLink>
          <FooterLink href="mailto:fishstackonline@gmail.com">fishstackonline@gmail.com</FooterLink>
        </ul>
      </div>

      <div className="text-center sm:text-start">
        <p className="text-sm font-bold uppercase text-zinc-500 sm:text-base">Про нас</p>
        <ul className="mt-2">
          <FooterAboutUs to="/payment">Доставка та оплата</FooterAboutUs>
          <FooterAboutUs to="/contract">Публічна оферта</FooterAboutUs>
          <FooterAboutUs to="/turning">Повернення та обмін</FooterAboutUs>
        </ul>
      </div>

      <div className="text-center">
        <p className="text-sm font-bold uppercase text-zinc-500 sm:text-base">Приєднуйтесь</p>
        <ul className="mt-4 flex items-center justify-center gap-4">
          <li>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-700 transition-all hover:bg-blue-500"
              href="https://instagram.com/fishstack.online?igshid=YmMyMTA2M2Y="
              target={dynamicLink}
            >
              <InstaIcon className="h-6 w-6 child-path:fill-white" />
            </a>
          </li>
          <li>
            <a
              className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-700 transition-all hover:bg-blue-500"
              href="https://t.me/fishstack"
              target={dynamicLink}
            >
              <TelegramIcon className="h-6 w-6 child-path:fill-white" />
            </a>
          </li>
        </ul>
      </div>

      <div className="mx-auto flex flex-col items-center gap-2 lg:mx-0">
        <p className="text-sm font-bold uppercase text-zinc-500 sm:text-base">
          Підпишіться на розсилку
        </p>
        <div className="flex w-full flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-around sm:gap-3">
          <Input placeholder="E-mail" type="email" fullWidth />
          <div className="sm:mt-1">
            <Button>
              Підписатись <SubmitIcon width="2" className="h-6 w-6 child-path:fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
