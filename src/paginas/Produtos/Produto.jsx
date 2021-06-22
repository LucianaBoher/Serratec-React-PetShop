import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardProduto from '../../Componentes/CardProduto'


const Produto = () => {
    const {id} = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/produtos/'+id)
            .then(response => setProduto(response.data))
    }, [id])
    return(
        <CardProduto nome={produto.nome} preco={produto.preco} id={produto.id} />
    )
}

export default Produto