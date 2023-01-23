import { FooterLink } from '../footer-link/footer-link.component';
import { Logo } from '../logo/logo.component';
import { ReactComponent as InstaIcon } from '@app/assets/icons/instagram.svg';
import { ReactComponent as TelegramIcon } from '@app/assets/icons/telegram.svg';
import { ReactComponent as SubmitIcon } from '@app/assets/icons/submit.svg';
import { Input } from '../input/input.component';
import { Button } from '../button/button.component';

export const Footer = () => {
  const dynamicLink = "_blank";
  return (
    <footer className="mt-auto flex flex-col items-center justify-center gap-6 bg-gray-900 p-8 sm:justify-between sm:gap-8 sm:p-12 lg:flex-row lg:items-start lg:justify-start lg:gap-0 lg:px-20">
      <div className="w-full sm:flex sm:justify-around lg:justify-between">
        <div className="flex flex-col items-center justify-center">
          <Logo footer />
          <div className="mb-6 mt-6">
            <ul className="flex flex-col items-center justify-center gap-2">
              <FooterLink href="tel:+380680707657">068 07 07 657</FooterLink>
              <FooterLink href="mailto:fishstackonline@gmail.com">
                fishstackonline@gmail.com
              </FooterLink>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center  sm:justify-start lg:mr-auto lg:ml-auto lg:justify-start">
          <div className="mb-2 sm:mb-6">
            <p className="text-sm font-bold uppercase text-zinc-500 sm:text-base">Приєднуйтесь</p>
          </div>
          <div>
            <ul className='flex gap-4'>
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
        </div>
      </div>

      <div className="flex w-full max-w-lg flex-col items-center justify-center lg:items-start lg:justify-start">
        <div className="mb-2">
          <p className="text-sm font-bold uppercase text-zinc-500 sm:text-base">
            Підпишіться на розсилку
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around lg:gap-3">
          <div className="lg:w-full">
            <Input placeholder="E-mail" type="email" fullWidth />
          </div>
          <div className="lg:mt-1">
            <Button>
              Підписатись <SubmitIcon width="2" className="h-6 w-6 child-path:fill-white" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
