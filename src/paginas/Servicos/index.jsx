import { useState, useEffect } from "react"

import axios from "axios"

import Item from "../../Componentes/Item"


const Servicos = () => {

    const [servicos, setServicos] = useState([]);

    const obterServicos = () => {
        axios.get('http://localhost:8000/servicos')
          .then( response => { setServicos(response.data) })
          .catch( erro => { console.log(erro) })
      }

    useEffect(() => {
        obterServicos();
    },[]);

    return(
         <ul>
            {servicos.map((item) => <Item 
                key={item.id}
                id={item.id}
                itemNome={item.nome}
                itemPreco={item.preco} />)}
         </ul>  
                  
    );
}

export default Servicos