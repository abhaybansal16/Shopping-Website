import { useEffect, useState } from 'react';
import CartItem from '../components/CartItem';

function Cart() {
  const [cart, setCart] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const handleQuantityChange = (id, quantity) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleRemove = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handleCheckout = () => {
    setCart([]);
    localStorage.removeItem('cart');
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 4000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
          <button onClick={handleCheckout} style={{ padding: '0.5rem 1rem' }}>
            Checkout
          </button>
        </>
      )}
      {showPopup && (
        <div style={{
          position: 'fixed', bottom: '2rem', right: '2rem',
          background: 'green', color: 'white', padding: '1rem', borderRadius: '8px'
        }}>
          Order placed successfully!
        </div>
      )}
    </div>
  );
}

export default Cart;
