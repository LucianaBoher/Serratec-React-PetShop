import { useState, useEffect } from "react"

import http from "../../HTTP/http"

import CardItensServicos from "./CardItensServicos"


const Servicos = () => {

    const [servicos, setServicos] = useState([]);

    const obterServicos = () => {
        http.get('servicos')
            .then(response => { setServicos(response.data) })
            .catch(erro => { console.log(erro) })
    }

    useEffect(() => {
        obterServicos();
    }, []);

    return (
        <ul>
            {servicos.map((servico) => <CardItensServicos
                key={servico.id}
                id={servico.id}
                nome={servico.nome}
                preco={servico.preco} />)}
        </ul>

    );
}

export default Servicos