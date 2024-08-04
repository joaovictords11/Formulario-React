import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import Cadastrar from './componentes/Cadastrar';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      nome:'Programação',
      cor:'#57C278'
    },
    {
      nome:'Front-End',
      cor:'#82CFFA'
    },
    {
      nome:'Data Science',
      cor:'#A6D157'
    },
    {
      nome:'Devops',
      cor:'#E06B69'
    },
    {
      nome:'UX e Design',
      cor:'#DB6EBF'
    },
    {
      nome:'Mobile',
      cor:'#FFBA05'
    },
    {
      nome:'Inovação e Gestão',
      cor:'#FF8A29'
    },
  ])

  const [mostrarFormulario, setMostrarFormulario] = useState(false)

  const [colaboradores, setColaboradores] = useState([])

  const aoAdicionarColaborador = (colaborador) => {

    colaborador.favorito = false
    colaborador.id = uuidv4()

    setColaboradores([...colaboradores, colaborador])
    setMostrarFormulario(false)

  }

  const mostrarOuEsconderForm = () => {
    setMostrarFormulario(!mostrarFormulario)
  }

  const deletarColaborador = (id) => {

    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))

  }

  const mudarCorDoTime = (cor, nome) => {

    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor
      }

      return time
    }))
  }

  const criarTime = (time) => {
    setTimes([...times, time])
  }

  const favoritarColaborador = (id) => {
    setColaboradores(colaboradores.map(colaborador => {

      if(colaborador.id === id){
        colaborador.favorito = !colaborador.favorito
      }

      return colaborador

    }))
  }

  return (
    <div className="App">

      <Banner/>
      <Cadastrar texto={'Minha Organização:'} aoClicarBtn={mostrarOuEsconderForm}/>
      
      {mostrarFormulario && 
        <Formulario 
          times={times.map(time => time.nome)} 
          aoCadastrarColaborador={colaborador => aoAdicionarColaborador(colaborador)}
          aoCriarTime={criarTime}
        />
      } 
      
      {times.map(time => 
        <Time 
          key={time.nome} 
          nomeDoTime={time.nome} 
          cor={time.cor} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          mudarCor={mudarCorDoTime}
          aoFavoritar={favoritarColaborador}
        />
      )}

      <Rodape/>

    </div>
  );
}

export default App;
