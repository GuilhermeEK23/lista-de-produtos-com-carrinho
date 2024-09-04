import './App.css';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Menu from './components/Menu';

function App() {
  return (
    <div className="app">
      <main>
        <div className='desserts-area'>
          <h1>Desserts</h1>
          <Menu />
        </div>
        <div className='cart-area'>
          <Cart />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;