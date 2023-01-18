import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserOrdersTable } from './user-orders-table.component';

export default {
  title: 'User/Orders table',
  component: UserOrdersTable,
} as ComponentMeta<typeof UserOrdersTable>;

const Template: ComponentStory<typeof UserOrdersTable> = (args) => (
  <UserOrdersTable {...args} />
);

const mockData = {
  "data": {
    "orders": [
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Пепероні з томатами"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "NEW",
        "sum": 257
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Барбекю"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "NEW",
        "sum": 297
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Пепероні з томатами"
            }
          },
          {
            "amount": 1,
            "item": null
          }
        ],
        "status": "NEW",
        "sum": 215
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Маргаріта"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "NEW",
        "sum": 292
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Пепероні з томатами"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "NEW",
        "sum": 257
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Маргаріта"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Піца Шинка та гриби"
            }
          }
        ],
        "status": "NEW",
        "sum": 465
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Техас"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Піца Мангеттен"
            }
          }
        ],
        "status": "CANCELED",
        "sum": 430
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Пепероні"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Піца Мангеттен"
            }
          }
        ],
        "status": "DONE",
        "sum": 465
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Карбонара"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "DONE",
        "sum": 292
      },
      {
        "created_at": "2022-12-28T11:40:33.635645+00:00",
        "order_items": [
          {
            "amount": 1,
            "item": {
              "title": "Піца Барбекю"
            }
          },
          {
            "amount": 1,
            "item": {
              "title": "Coca cola"
            }
          }
        ],
        "status": "DONE",
        "sum": 297
      }
    ],
    "order_status": [
      {
        "id": "NEW",
        "label": "Новий"
      },
      {
        "id": "IN_PROGRESS",
        "label": "Готується"
      },
      {
        "id": "DELIVERED",
        "label": "Доставлений клієнту"
      },
      {
        "id": "CANCELED",
        "label": "Відмінений"
      },
      {
        "id": "DONE",
        "label": "Готовий до відправки"
      }
    ]
  }
};

export const View = Template.bind({});
View.args = {
  data: mockData.data.orders as any,
  orderStatus: mockData.data.order_status
}