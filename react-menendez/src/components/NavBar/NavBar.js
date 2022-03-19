import './NavBar.css'
import logo from './logo.png'

const NavBar = () => {
  return (
    <div className="navDiv">
      <picture className="appLogo">
        <img src={logo} />
        <h1 className="logoTitle">Fast Food Fifteen</h1>
      </picture>
      <nav>
        <ul>
          <li>
           <a href='#'>Inicio</a>
          </li>
          <li>
           <a href='#'>Comidas</a>
          </li>
          <li>
           <a href='#'>Bebidas</a>
          </li>
          <li>
           <a href='#'>Combos</a>
          </li>
        </ul>
      </nav>
    </div>
  );

}

export default NavBar;
