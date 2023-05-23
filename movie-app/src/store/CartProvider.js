// import { useReducer } from "react";
// import CartConText from "./cart-context";
// import { actions } from "./actions";
// import cartReducer from "./actions/reducerCart";

// const CartProvider = (props) => {

  // const defaultCartState = {
  //   itemsOrder : [],
  //   totalCartAmount : 0
  // }

//   //reducer trả về state mới lưu vào cartState
//   const [cartState , dispatchCartAction] = useReducer(cartReducer,defaultCartState)

//   //dispatch action
//   const addItemToCartHandler = (item) => {
//     dispatchCartAction(actions.addItem(item))
//   }

//   const removeItemToCartHandler = (id) => {
//     dispatchCartAction(actions.removeItem(id))
//   }

//   // value truyen xuong cacscomponent con
//   const cartContext = {
//     itemsOrder : cartState.itemsOrder,
//     totalCartAmount: cartState.totalCartAmount,
//     addItem:addItemToCartHandler,
//     removeItem:removeItemToCartHandler,
//   }


//   //Giá trị state truyền xuống các Component con
//   return (
//     <CartConText.Provider value={cartContext}>
//       {props.children}
//     </CartConText.Provider>
//   );
// };

// export default CartProvider;

import { useReducer } from 'react';
import CartContext from './cart-context';
import { defaultCartState } from './cartReducer';
import cartReducer from './cartReducer';
import { actions } from './actions';

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction(actions.addItem(item));
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction(actions.removeItem(id));
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;