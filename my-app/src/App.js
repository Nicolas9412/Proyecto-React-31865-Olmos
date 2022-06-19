import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer,';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState, createContext} from 'react'

export const Context = createContext()

function App() {
  const [cart, setCart] = useState([])
  return (
    <div className="App">
      <Context.Provider value={{cart, setCart}}>
        <BrowserRouter>
          <Header/>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={"Productos"}/>}/>
            <Route path='/category/:category' element={<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
