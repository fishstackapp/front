import { Header } from './common/components/header/header.component';
import { MenuList } from './modules/menu/components/menu-list/menu-list.component';
import { Footer } from './common/components/footer/footer.component';
import fishMenu from './db/fish.json';

export const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-12 mb-24">
        <MenuList items={fishMenu} />
      </div>
      <Footer />
    </div>
  );
};
