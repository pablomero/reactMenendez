import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Lo mejor en Comidas y Bebidas en menos de 15 minutos"/>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default App;
