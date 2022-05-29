import './App.css';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <Header/>
        <NavBar/>
        <ItemListContainer greeting={"Productos"}></ItemListContainer>
    </div>
    
  );
}

export default App;
