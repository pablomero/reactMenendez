import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'

function App() {

  const onAdd = (quantity) => {
    console.log(quantity)
  }
  return (
    <>
      <NavBar />
      <h2>Lo mejor en Comidas y Bebidas en menos de 15 minutos</h2>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default App;
