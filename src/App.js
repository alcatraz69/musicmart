import './App.css';
import {Navbar, MainPage,Products,WishList,CartPage,Footer} from './Components'

import { Switch, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <Switch>
        <Route  path="/cart"  component={CartPage } />
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
