import { BrowserRouter, Route, Switch } from 'react-router-dom'

import NavBar from './Componentes/NavBar'

import FormularioCadastro from './Componentes/FormularioCadastro'
import FormularioLogin from './Componentes/FormularioLogin'
import Home from './Paginas/Home'
import Pagina404 from './Paginas/Pagina404'
import Produtos from './Paginas/Produtos'
import Servicos from './Paginas/Servicos'
import Produto from './Paginas/Produtos/Produto'
import Servico from './Paginas/Servicos/Servico'


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
