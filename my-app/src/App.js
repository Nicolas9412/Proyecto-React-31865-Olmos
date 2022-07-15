import "./App.css";
import Header from "./Components/Header/Header";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer,";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart/Cart";
import CheckOut from "./Components/CkeckOut/CheckOut";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header />
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={"Productos"} />}
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route
              path="/detail/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
