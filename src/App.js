// import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import {Routes ,Route} from 'react-router-dom'
import Home from './Components/Home'
import Cart from './Components/Cart'



 function App() {
  return (
    <div>
        <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
