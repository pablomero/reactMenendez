import { useState } from 'react'

const ItemCount = ({ initial = 0, stock, onAdd}) => {
  const [count, setCounter] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCounter(count => count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCounter(count => count - 1);
    }
  };

  return (
    <div>
      <h1>Componente count</h1>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount