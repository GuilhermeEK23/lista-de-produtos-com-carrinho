import './App.css';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Modal from './components/Modal';
import dataProducts from './data.json';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const removeProduct = (product) => {
    setCart((prevCart) => {
      if (prevCart.find((item) => item.name === product.name & item.quantity > 1)){
        return prevCart.map((item) => item.name === product.name ? {...item, quantity: item.quantity - 1} : item);
      }
      return prevCart.filter((item) => item.name !== product.name);
    })
  }

  const removeItemCart = (name) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.name !== name);
    })
  }

  const showModal = () => {
    setModalIsOpen(true);
  }
  
  return (
    <div className="app">
      <main>
        <div className='desserts-area'>
          <h1>Desserts</h1>
          <Menu dataProducts={dataProducts} cart={cart} setCart={setCart} removeProduct={removeProduct} />
        </div>
        <div className='cart-area'>
          <Cart cart={cart} removeItemCart={removeItemCart} showModal={showModal} />
        </div>
      </main>
      <Modal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
      <Footer />
    </div>
  );
}

export default App;