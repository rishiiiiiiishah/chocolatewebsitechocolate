import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === id);
      if (index !== -1) {
        const newCart = [...prevItems];
        newCart.splice(index, 1); // Remove only one instance
        return newCart;
      }
      return prevItems;
    });
  };
  

  const getCartCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>
      {children}
    </CartContext.Provider>
  );
};
