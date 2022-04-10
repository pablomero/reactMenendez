import { useState } from 'react'

const ItemCount = ({ onAdd }) => {
  const [count, setCounter] = useState(0);

  const increment = () => {
    setCounter(count => count + 1);
  };

  const decrement = () => {
    setCounter(count => count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount
