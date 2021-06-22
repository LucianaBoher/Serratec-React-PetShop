import axios from 'axios'
import { useState } from 'react'
import './estilos.css'


const FormularioCadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const manipuladorNome = (evento) => {
        setNome(evento.target.value)
    }
    const manipuladorEmail = (evento) => {
        setEmail(evento.target.value)
    }
    const manipuladorSenha = (evento) => {
        setSenha(evento.target.value)
    }

    const efetuarCadastro = (evento) => {
        evento.preventDefault()
        const usuario = {
            nome: nome,
            email: email,
            senha: senha
        }

        axios.post('http://localhost:8000/auth/register', usuario)
            .then(response => console.log(response.data))
            .catch(erro => {
                console.log('Algo deu errado')
                console.log(erro)
            })
        setNome('')
        setEmail('')
        setSenha('')
    }


    return (
        <div>
            <form onSubmit={efetuarCadastro}>
                <div>
                    <h1>Página de Cadastro</h1>
                </div>
                <div>
                    <label>Nome</label>
                    <input required value={nome} onChange={manipuladorNome} />
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
                    Cadastrar
                </button>
            </form>
        </div>

    )
}

export default FormularioCadastro