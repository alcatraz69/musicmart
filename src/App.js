import './App.css';
import NavBar from './Components/NavBar/navbar'
import MainPage from './Components/MainPage/MainPage'
import Products from './Components/Products/Products'
import { Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
      
      <Switch>
        
        <Route path="/" component={MainPage } />
        <Route path="products" component={Products } />
    
      </Switch>
    </div>
  );
}

export default App;
