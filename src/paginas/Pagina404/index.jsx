import erro404 from "./erro404.jpg"
import './estilos.css'


const Pagina404 = () => {
    return(
    <div className="principal">
        <h1>ERRO 404</h1>
        <img alt="Erro 404" src={erro404}></img>
        <h3>Desculpe...não podemos encontrar essa página.</h3>        
    </div>
    );
}

export default Pagina404