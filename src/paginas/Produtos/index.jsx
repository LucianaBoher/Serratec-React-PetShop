import { useState, useEffect } from "react"

import http from "../../HTTP/http"

import CardItensProdutos from "./CardItensProdutos"


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    const obterProdutos = () => {
        http.get('produtos')
            .then(response => { setProdutos(response.data) })
            .catch(erro => { console.log(erro) })
    }

    useEffect(() => {
        obterProdutos();
    }, []);

    return (
        <ul>
            {produtos.map((produto) => <CardItensProdutos
                key={produto.id}
                id={produto.id}
                nome={produto.nome}
                preco={produto.preco} />)}
        </ul>
    );
}

export default Produtos