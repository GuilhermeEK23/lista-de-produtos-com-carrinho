import { useEffect, useState } from 'react';
import './Cart.css';

function Cart({cart, removeItemCart, showModal}){
  const [quantityInCart, setquantityInCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    setquantityInCart(() => {
      let quantity = 0;
      cart.map((item) => {
        if (item.quantity > 0){
          quantity = quantity + item.quantity
        }
      })
      return quantity;
    })
    setTotalCart(() => {
      let total = 0;
      cart.map((item) => {
        total = total + (item.quantity * item.price)
      })
      return total;
    })
  }, [cart])

  if(quantityInCart > 0){
    return(
        <div className='cart'>
          <h2>Your Cart ({quantityInCart})</h2>
          <div className='productsInCart'>
            {cart.map(((item, key) => (
              <div key={key} className='productInCart'>
                <div className='dataProduct'>
                  <p className='nameProduct'>{item.name}</p>
                  <div className='valuesProduct'>
                    <span className='quantityProduct'>{item.quantity}x</span>
                    <span className='priceProduct'>${item.price.toFixed(2)}</span>
                    <span className='subtotalProduct'>${(item.quantity * item.price).toFixed(2)}</span>
                  </div>
                </div>
                <button className='removeItemCart' onClick={() => removeItemCart(item.name)}>
                  <img src="/assets/images/icon-remove-item.svg" alt="icon remove item" />
                </button>
              </div>
            )))}
            <div className='order-total'>
              <p>Order total</p>
              <p className='value-cart'>${totalCart.toFixed(2)}</p>
            </div>
          </div>
          <button className='confirm-order' onClick={() => showModal()}>Confirm Order</button>
        </div>
      );
  }
    
  return(
    <div className='cart'>
      <h2>Your Cart ({quantityInCart})</h2>
      <div className='cartEmpty'>
      <img src='/assets/images/illustration-empty-cart.svg' alt="Empty Cart" />
      </div>
      <p className='message-empty'>Your added items will appear here</p>
    </div>
  );
}

export default Cart;