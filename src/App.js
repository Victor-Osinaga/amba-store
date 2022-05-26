import './App.css';
import NavBar from './componentes/NavBar.js';
import Home from './componentes/Home.js';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CartContextProvider } from './store/CartContext';

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
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
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
