import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './Componentes/NavBar'

import Home from './paginas/Home'
import Pagina404 from './paginas/Pagina404'
import Produtos from './paginas/Produtos/'
import Servicos from './paginas/Servicos'
import Produto from './paginas/Produtos/Produto'
import Servico from './paginas/Servicos/Servico'
import FormularioCadastro from './Componentes/FormularioCadastro'
import FormularioLogin from './Componentes/FormularioLogin'


function App() {

  return (

    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route path="/produtos/:id">
          <Produto />
        </Route>
        <Route exact path="/servicos">
          <Servicos />
        </Route>
        <Route path="/servicos/:id">
          <Servico />
        </Route>
        <Route path="/cadastro">
          <FormularioCadastro />
        </Route>
        <Route path="/login">
          <FormularioLogin />
        </Route>
        <Route>
          <Pagina404 />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
