import erro404 from "./erro404.jpg"
import './estilos.css'


const Pagina404 = () => {
    return (
        <div className="principal">
            <div>
                <h1>ERRO 404</h1>
                <img alt="Erro 404" src={erro404}></img>
                <h3>Au au...desculpe, não conseguimos encontrar essa página.</h3>
                <h3>Por favor, verifique o link desejado.</h3>
            </div>
        </div>
    );
}

export default Pagina404