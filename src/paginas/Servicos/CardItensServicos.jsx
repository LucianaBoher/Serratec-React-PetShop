import { Link } from 'react-router-dom'

import './estilos.css'

const CardItensServicos = ({ nome, preco, id }) => {
    return (
        <div className="cartaoS">
            <div className="corpoS">
                <h3>{nome}</h3>
                <p>R$ {preco}</p>
                <Link to={`/servicos/${id}`}>Ver detalhes</Link>
            </div>
        </div>
    )
}

export default CardItensServicos