import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer,';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext'

function App(){
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Header/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos"}/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
