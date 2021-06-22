import './estilos.css'

import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/produtos">Produtos</Link>
        </li>
        <li>
          <Link to="/servicos">Serviços</Link>
        </li>
      </ul>
    </nav>
  );

}

export default NavBar