import "./App.css";
import {
  Navbar,
  MainPage,
  Products,
  WishList,
  CartPage,
  Footer,
  Login,
  Account,
} from "./Components";
import { useAuth } from "./store/AuthContext";

import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const {
    authState: { isUserLoggedIn },
  } = useAuth();
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route path="/account" component={isUserLoggedIn ? Account : Login} />
        <Route path="/login" component={Login} />
        <Route path="/cart" component={isUserLoggedIn ? CartPage : Login} />
        <Route path="/wishlist" component={isUserLoggedIn ? WishList : Login} />
        <Route path="/products" component={Products} />
        <Route path="/" component={MainPage} />
      </Switch>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
