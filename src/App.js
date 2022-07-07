
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<CartList />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
