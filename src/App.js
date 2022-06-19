import './App.css';
import NavBar from './componentes/NavBar.js';
import Home from './componentes/Home.js';
import CartView from './componentes/CartView';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';
import Footer from './componentes/Footer';
import Checkout from './componentes/Checkout'

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter >
          <NavBar />
          <Routes>
            <Route path="/producto/:itemid" element={<ItemDetailContainer />} />
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryid" element={<ItemListContainer titulo = 'Categoria ' />} />
            <Route path="/cart" element={<CartView />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <Footer />
      {/* <ItemListContainer greeting = 'GREETING' /> */}
      {/* <ItemDetailContainer id={5} /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}


export default App;
