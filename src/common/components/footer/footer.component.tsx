import { FooterLink } from '../footer-link/footer-link.component';

export const Footer = () => {
  return (
    <div className="bg-gray-900 px-12">
      <div className="pt-12 pb-8">
        <div className="mb-4 font-bold text-sm text-zinc-500">
          <span className="uppercase">Контакти</span>
        </div>
        <div>
          <ul>
            <FooterLink href="tel:+380441234567">044 123 45 67</FooterLink>
            <FooterLink href="mailto:info@fishstack.app">info@fishstack.app</FooterLink>
          </ul>
        </div>
      </div>
      <hr className="relative left-[-3rem] w-[calc(100%_+_6rem)] border-zinc-500" />
      <div className="py-8">
        <span className="font-semibold text-xl text-white">🐟 FishStack</span>
      </div>
    </div>
  );
};
