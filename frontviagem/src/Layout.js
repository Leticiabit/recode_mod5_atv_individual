import { Outlet, Link } from "react-router-dom";
import './css/styles.css';
import Logo from './logo.svg';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
          <img src={Logo} alt="logo" width="50"/>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/clientes">Clientes</Link>
          </li>
          <li>
            <Link to="/destinos">Destinos</Link>
          </li>
          <li>
            <Link to="/viagens">Viagens</Link>
          </li>
        </ul>
      </nav>

      <Outlet />

      <footer>
        <h2>Leticiabit | Viagens</h2>
        <p>@2022</p>
        <p>(11) 97393-0223</p>
      </footer>
    </>
  )
};

export default Layout;