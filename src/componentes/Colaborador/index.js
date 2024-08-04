import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import './Colaborador.css'

const Colaborador = ({ nome, imagem, cargo, corDeFundo, aoDeletar, favorito, aoFavoritar, id }) => {

    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return(
        <div className='colaborador'>
            <AiFillCloseCircle 
                size={28} 
                className="deletar" 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{ backgroundColor:corDeFundo }}>
                <img src={imagem} alt={nome}/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className="favoritar">
                    {favorito
                        ? <AiFillHeart {...propsFavorito} color="ff0000" />
                        : <AiOutlineHeart {...propsFavorito} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Colaborador