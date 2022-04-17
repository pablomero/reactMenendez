import './NavBar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import CartContext from '../../context/CartContext'


const NavBar = () => {
  const { getQuantity }  = useContext(CartContext)
  return (
    <div className="navDiv">
      <Link to='/'>
        <picture className="appLogo">
          <img src={logo} alt='logo' />
          <h1 className="logoTitle">Fast Food Fifteen</h1>
        </picture>
      </Link>
      <nav>
        <ul>
          <li>
           <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
           <NavLink to='category/comida'>Comidas</NavLink>
          </li>
          <li>
           <NavLink to='category/bebida'>Bebidas</NavLink>
          </li>
          <li>
           <NavLink to='category/combo'>Combos</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget isEmpty={ getQuantity() == 0 } />
    </div>
  );

}

export default NavBar;
