import './App.css';
import NavBar from './componentes/NavBar.js';
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
            <Route path="/" element={<ItemListContainer titulo = 'Productos' />} />
            <Route path="/category/:categoryid" element={<ItemListContainer titulo = 'Categoria ' />} />
            <Route path="/cart" element={<CartView />} />
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
      <Footer />
    </div>
  );
}

export default App;
