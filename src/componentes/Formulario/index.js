import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('#000000')

    const aoSalvar = (event) => {
        event.preventDefault()

        props.aoCadastrarColaborador({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    const aoSalvarTime = (event) => {
        event.preventDefault()

        props.aoCriarTime({
            nome: nomeTime,
            cor: corTime
        })

        setNomeTime('')
        setCorTime('')

    }

    return( 
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar = {valorNome => setNome(valorNome)}
                />
                <Campo 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterar = {valorCargo => setCargo(valorCargo)}
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem"
                    valor={imagem}
                    aoAlterar = {valorImagem => setImagem(valorImagem)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    lista={props.times} 
                    label="Times"
                    valor={time}
                    aoAlterar = {valorTime => setTime(valorTime)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>

            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo 
                    obrigatorio={true} 
                    label="Time" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterar = {valorNomeTime => setNomeTime(valorNomeTime)}
                />
                <Campo 
                    type='color'
                    obrigatorio={true} 
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterar = {valorCorTime => setCorTime(valorCorTime)}
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario