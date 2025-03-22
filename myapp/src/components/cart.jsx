import React, { useState } from 'react';
import { useCart } from './CartContent';
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleProceedToBuy = () => {
    setShowCheckoutForm(true);
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.new_price, 0);

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-price">Rs. {item.new_price}</div>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>X</button>
            </div>
          ))}
          <div className="cart-total">
            <h2>Total: Rs. {totalPrice}</h2>
          </div>
          <button className="proceed-button" onClick={handleProceedToBuy}>Proceed to Buy</button>
        </>
      )}
      {showCheckoutForm && (
        <div className="checkout-form">
          <h2>Enter Shipping Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="payment-button">Proceed to Payment</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
