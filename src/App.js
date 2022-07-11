
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Nav from "./components/Nav";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Login from './components/Login';
import UserRedirects from './route/UserRedirects';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Nav />
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/cart' element={<CartList />} />
            <Route path='/login' element={<Login />} />
            <Route path='/product/:id' element={<UserRedirects />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
