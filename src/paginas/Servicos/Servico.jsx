import http from "../../HTTP/http"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import CardServico from '../../Componentes/CardServico'


const Servico = () => {
    const {id} = useParams()
    const [servico, setServico] = useState({})

    useEffect(() => {
        http.get('servicos/'+id)
            .then(response => setServico(response.data))
    }, [id])
    return(
        <CardServico nome={servico.nome} preco={servico.preco} id={servico.id} />
    )
}

export default Servico