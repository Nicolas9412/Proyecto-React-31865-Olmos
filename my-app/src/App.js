import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer,';

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <ItemListContainer greeting={"Productos"}/>
        <ItemDetailContainer/>
    </div>
  );
}

export default App;
