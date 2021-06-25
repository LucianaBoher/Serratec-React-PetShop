import logo from "./logo.png"
import './estilos.css'


const Home = () => {
    return (
        <div className="principal fundo-escuro">
            <div>
                <h1>LUNA PET SHOP</h1>
                <img alt="Logo da Pet" src={logo}></img>
                <h2>A melhor loja de Pet da região!!</h2>
                <h4>Endereço: R. Jardel Hottz - Parque Sao Clemente, Nova Friburgo - RJ, 28625-180</h4>
            </div>
        </div>
    );
}

export default Home