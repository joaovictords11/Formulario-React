import './Cadastrar.css'

const Cadastrar = ({ texto, aoClicarBtn }) => {
    return(
        <div className='cadastrar'>
            <p>{texto}</p>
            <button onClick={aoClicarBtn}>
                <img src='./imagens/botao.png' alt="Botão de adicionar"/>
            </button>
        </div>
    )
}

export default Cadastrar