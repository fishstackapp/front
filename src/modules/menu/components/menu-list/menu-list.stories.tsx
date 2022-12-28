import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MenuList } from '@app/modules/menu/components/menu-list/menu-list.component';

export default {
  title: 'Menu/Menu List',
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = args => <MenuList {...args} />;

export const View = Template.bind({});

View.args = {
  items: [
    {
      id: "ecc5f06d-b8af-4c45-9add-ea3cabfa7753",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 215,
      title: "Піца Мангеттен",
      weight: 555,
      descriptions: "(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо"
    },
    {
      id: "94720c8c-cd05-41f8-b144-5fbfdee3cb36",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 250,
      title: "Піца Маргаріта",
      weight: 552,
      descriptions: "(подвійна порція моцарели), Моцарела, Соус PizzaStack"
    },
    {
      id: "23a2cc9f-2e17-4516-882f-364b68839978",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 215,
      title: "Піца Пепероні з томатами",
      weight: 554,
      descriptions: "Моцарела, Пепероні, Помідори, Соус Барбекю, Тест"
    },
    {
      id: "73383c80-2ecb-4f40-9174-ea24acd1b796",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 250,
      title: "Піца Карбонара",
      weight: 540,
      descriptions: "Цибуля, Бекон, Шинка, Гриби, Моцарела, Соус Альфредо"
    },
    {
      id: "72d1586d-f070-4d43-a23a-e6eb34e6ed95",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 255,
      title: "Піца Барбекю",
      weight: 552,
      descriptions: "Курка, Цибуля, Бекон, Гриби, Моцарела, Соус Барбекю"
    },
    {
      id: "52162379-5fd2-4dc1-b737-b1185075c874",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 250,
      title: "Піца Пепероні",
      weight: 560,
      descriptions: "Моцарела, Пепероні, Соус PizzaStack"
    },
    {
      id: "27764394-dd7f-4d4c-8999-c66731e1e573",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671835457",
      price: 215,
      title: "Піца Шинка та гриби",
      weight: 545,
      descriptions: "Шинка, Гриби, Моцарела, Соус PizzaStack"
    },
    {
      id: "2facea92-5600-4e71-a58e-fed521679579",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671839661",
      price: 250,
      title: "Піца Гриль Мікс",
      weight: 569,
      descriptions: "Курка, Фрикадельки, Цибуля, Бекон, Болгарський перець, Моцарела, Соус Барбекю"
    },
    {
      id: "6eb1cb6f-a36e-4abd-a816-b8f9a3d7f49f",
      category_id: "59cd6337-8713-42f2-ab54-093d3bd145cb",
      image: "menu/menu-1671897903",
      price: 215,
      title: "Піца Техас",
      weight: 550,
      descriptions: "Кукурудза, Цибуля, Гриби, Ковбаски баварські, Моцарела, Соус Барбекю"
    }
  ],
};
