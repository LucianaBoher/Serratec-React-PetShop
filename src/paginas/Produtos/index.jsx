import { useState, useEffect } from "react"

import axios from "axios"

import Item from "../../Componentes/Item"


const Produtos = () => {

    const [produtos, setProdutos] = useState([]);

    const obterProdutos = () => {
        axios.get('http://localhost:8000/produtos')
          .then( response => { setProdutos(response.data) })
          .catch( erro => { console.log(erro) })
    }

    useEffect(() => {
        obterProdutos();
    },[]);

    return(
        <ul>
            {produtos.map((item) => <Item 
                key={item.id}
                id={item.id}
                itemNome={item.nome}
                itemPreco={item.preco} />)}
        </ul>        
    );
}

export default Produtos