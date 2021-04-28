import './App.css';
import NavBar from './Components/NavBar/navbar'
import MainPage from './Components/MainPage/MainPage'
import Products from './Components/Products/Products'
import WishList from './Components/WishList/WishList'
import Cart from './Components/CartPage/CartPage'
import Footer from './Components/Footer/Footer'
import { Switch, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        <Route  path="/cart"  component={Cart } />
        <Route  path="/wishlist"  component={WishList } />
        <Route  path="/products"  component={Products } />
        <Route  path="/"  component={MainPage } />
      </Switch>
      <ToastContainer/>
      <Footer/>
    </div>
  );
}

export default App;
