import { LoremIpsum } from 'react-lorem-ipsum'
import './estilos.css'


const CardProduto = ({nome, preco}) => {
    return (
        <div className="card">
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
            <p>Descrição:</p>
            <LoremIpsum p={1} />
            <button>Adicionar ao carrinho</button>
        </div>
    )
}

export default CardProduto