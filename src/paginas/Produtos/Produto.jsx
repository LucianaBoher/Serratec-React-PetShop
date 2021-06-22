import http from "../../HTTP/http"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardProduto from '../../Componentes/CardProduto'


const Produto = () => {
    const {id} = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produtos/'+id)
            .then(response => setProduto(response.data))
    }, [id])


    return(
        <CardProduto nome={produto.nome} preco={produto.preco}/>
    )
}

export default Produto