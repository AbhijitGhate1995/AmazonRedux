import "./App.css";
import NavBar from "./component/NavBar";
import ProductCard from "./component/ProductCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./component/cartPage";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route exact path ="/" element={<ProductCard />} />
          <Route path ="/cart" element={<CartPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
