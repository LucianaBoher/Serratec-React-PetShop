import { Link } from 'react-router-dom'

import './estilos.css'

const CardItensProdutos = ({ nome, preco, id }) => {
    return (
        <div className="cartao">
            <div className="corpo">
                <h3>{nome}</h3>
                <p>R$ {preco}</p>
                <Link to={`/produtos/${id}`}>Ver detalhes</Link>
            </div>
        </div>
    )
}

export default CardItensProdutos