import {Link} from 'react-router-dom'
import './estilos.css'

const CardProduto = ({nome, preco, id}) => {
    return (
        <div className="card">
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
            <Link to={`/produtos/${id}`}>Adicionar ao carrinho</Link>
        </div>
    )
}

export default CardProduto