import React, { useEffect, useState } from 'react'
import './Cart.scss'
import icon from '../assets/icons8-delete.svg'
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer/Footer';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  function handleDelete(id) {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  function handleQuantityChange(id, newCount) {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: newCount };
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  }

  function calculateTotal() {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.count,
      0
    );
  }

  if (cartItems.length === 0) {
    return (
      <>
        <div className="container">
          <h2 className="cart__title">Your Products</h2>
          <h3 style={{ textAlign: 'center', fontSize: '22px' }}>There are currently no products in your cart...</h3>
          <button className='cart__btn' onClick={() => navigate('/')}>Back to Home</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container">
        <h2 className="cart__title">Your Products</h2>
        {cartItems.map((item) => (
          <div key={item.id}>
            <div className="cart">
              <div className="cart__infos">
                <img style={{ borderRadius: '8px' }} src={item.image} alt={item.title} width={100} height={100} />
                <div className="cart__product--info">
                  <h4 className="cart__name">{item.title}</h4>
                  <p className="cart__price">{`Price: $${item.price}`}</p>
                </div>
              </div>
              <div className="cart__counter">
                <div className="input-group">
                  <button
                    onClick={() => handleQuantityChange(item.id, Math.max(1, item.count - 1))}
                    className="button-minus"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.count}
                    readOnly
                    className="quantity-field"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, item.count + 1)}
                    className="button-plus"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button className="cart__delete" onClick={() => handleDelete(item.id)}>
                    <img src={icon} alt="delete" width={25} height={25} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="cart__total">
          <h4>Total:</h4>
          <p>{`$${calculateTotal()}`}</p>
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <button onClick={() => setModal(true)} className='cart__btn--buy'>Checkout</button>
      </div>
      <Footer />
      {modal && (
        <div className="popup">
          <div className="popup-inner">
            <p>{`$${calculateTotal()}`}</p>
            <p>For the purchase of</p>
            <div className="two-boxes" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className="items-box">
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <div style={{ display: 'flex', gap: '20px', }}>
                      <img width={70} height={70} style={{ borderRadius: '8px' }} src={item.image} alt={item.title} />
                      <div>
                        <h2 style={{ fontWeight: '500', fontSize: '18px' }}>{item.title}</h2>
                        <p style={{ marginTop: '10px', marginBottom: '10px' }}>{`Price: $${item.price}`}</p>
                        <p>{`Count: ${item.count}`}</p>
                      </div>
                    </div>
                    <hr style={{ margin: '20px 0' }} />
                  </div>
                ))}
              </div>
              <div className="form-box">
                <form>
                  <button onClick={() => navigate("/cart")} type="submit" className='cart__btn--buy' style={{ width: '100%', marginBottom: '10px' }}>Buy Now</button>
                  <button onClick={() => setModal(false)} type='button' className='button-cancel'>Cancel</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}