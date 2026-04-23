import styled from 'styled-components'
import UltimosLancamentos from '../src/componentes/UltimosLancamentos/index.js'
import Pesquisa from '../src/componentes/Pesquisa/index.js'

const Appcontainer = styled.div `
      width:100vw;
      height:100vh;
      background-image: linear-gradient(90deg, #002F52 35%, #326589);



    li{
      list-style-type: none;
  }

`

function App() {
  return (
    <Appcontainer>
      <Pesquisa/>
      <UltimosLancamentos />
    </Appcontainer>
  );
}

export default App;
