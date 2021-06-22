import { LoremIpsum } from 'react-lorem-ipsum'
import './estilos.css'


const CardServico = ({nome, preco}) => {
    return (
        <div className="cardS">
            <h3>{nome}</h3>
            <p>R$ {preco}</p>
            <p>Descrição:</p>
            <LoremIpsum p={1} />
            <button>Adicionar ao carrinho</button>
        </div>
    )
}

export default CardServico