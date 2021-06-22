import http from "../../HTTP/http"
import { useState } from 'react'
import './estilos.css'


const FormularioLogin = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        const usuario = {
            email: email,
            senha: senha
        }

        http.post('auth/login', usuario)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)
            })    
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro)
            })
        setEmail('')
        setSenha('')
    }


    return (
        <div>
            <form onSubmit={efetuarLogin}>
                <div>
                    <h1>Página de Login</h1>
                </div>
                <div>
                    <label>E-mail</label>
                    <input required type="email" value={email} onChange={manipuladorEmail} />
                </div>
                <div>
                    <label>Senha</label>
                    <input required type="password" value={senha} onChange={manipuladorSenha} />
                </div>
                <button>
                    Entrar
                </button>
            </form>
        </div>

    )
}

export default FormularioLogin