import './NavBar.css'
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navDiv">
      <picture className="appLogo">
        <img src={logo} alt='logo' />
        <h1 className="logoTitle">Fast Food Fifteen</h1>
      </picture>
      <nav>
        <ul>
          <li>
           <Link to='/'>Inicio</Link>
          </li>
          <li>
           <Link to='category/comida'>Comidas</Link>
          </li>
          <li>
           <Link to='category/bebida'>Bebidas</Link>
          </li>
          <li>
           <Link to='category/combo'>Combos</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </div>
  );

}

export default NavBar;
