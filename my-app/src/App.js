import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer,';
import { Router, Route, Link } from 'react-router'

function App() {
  return (
    <div className="App">
        <Router>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
          <Route></Route>
        </Router>
        <Header/>
        <NavBar/>
        <ItemListContainer greeting={"Productos"}/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
