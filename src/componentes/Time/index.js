import Colaborador from '../Colaborador'
import './Time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ cor, colaboradores, nomeDoTime, aoDeletar, mudarCor, aoFavoritar }) => {

    const css = hexToRgba(cor, '0.5')

    return(
        colaboradores.length > 0 &&
        <section className='time' style={{backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: css}}>
            <input onChange={evento => mudarCor(evento.target.value, nomeDoTime)} value={cor} type='color' className='input-cor'/>
            <h3 style={{ borderColor: cor }}>{nomeDoTime}</h3>
            <div className='colaboradores'>
                {colaboradores.map(colaborador => 
                    <Colaborador 
                        aoDeletar={aoDeletar} 
                        corDeFundo={cor} key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem}
                        id={colaborador.id}
                        favorito={colaborador.favorito}
                        aoFavoritar={aoFavoritar}
                    />)
                }
            </div>
        </section>
    )
}

export default Time