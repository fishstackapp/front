import { makeVar } from '@apollo/client';

interface cartItems {
  id: string;
  amount: number;
}

const CART_STATE_LS_KEY = 'cart_state';

const getCartStateFromLocalStorage = () => {
  try {
    const state = localStorage.getItem(CART_STATE_LS_KEY) ?? '[]';

    return JSON.parse(state);
  } catch (error) {
    return [];
  }
};

export const cartState = makeVar<cartItems[]>(getCartStateFromLocalStorage());

export const addItemsToCart = (id: string) => {
  const cart = [...cartState()];

  const existingItemIndex = cart.findIndex(el => el.id === id);

  if (existingItemIndex >= 0) {
    cart[existingItemIndex].amount += 1;
  } else {
    cart.push({ id, amount: 1 });
  }

  cartState(cart);

  localStorage.setItem(CART_STATE_LS_KEY, JSON.stringify(cart));
};
