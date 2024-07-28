import './Rodape.css'

const Rodape = () => {
    return(
        <section className='rodape'>
            <div className='lista-nav'>
                <a href='https://www.facebook.com/AluraCursosOnline'>
                    <img src='./imagens/fb.png' alt='logo do facebook'/>
                </a>
                <a href='https://x.com/AluraOnline'>
                    <img src='./imagens/tw.png' alt='logo do x'/>
                </a>
                <a href='https://www.instagram.com/aluraonline/'>
                    <img src='./imagens/ig.png' alt='logo do instagram'/>
                </a>
            </div>
            <img className='logo' src='./imagens/logo.png' alt='logo da empresa'/>
            <h4>Desenvolvido por João.</h4>
        </section>
    )
}

export default Rodape