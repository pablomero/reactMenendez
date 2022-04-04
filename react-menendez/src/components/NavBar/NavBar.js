import './NavBar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
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
      <CartWidget />
    </div>
  );

}

export default NavBar;
