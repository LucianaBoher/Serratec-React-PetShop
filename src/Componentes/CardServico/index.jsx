import {Link} from 'react-router-dom'
import './estilos.css'


const CardServico = ({nome, preco, id}) => {
    return (
        <div className="card">
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
            <Link to={`/servicos/${id}`}>Adicionar ao carrinho</Link>
        </div>
    )
}

export default CardServico