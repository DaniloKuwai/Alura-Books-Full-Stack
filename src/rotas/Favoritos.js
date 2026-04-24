import styled from 'styled-components'
import Pesquisa from '../componentes/Pesquisa/index.js'

const Appcontainer = styled.div `
      width:100vw;
      height:100vh;
      background-image: linear-gradient(90deg, #002F52 35%, #326589);



    li{
      list-style-type: none;
  }

`

function Favoritos() {
  return (
    <Appcontainer>
      <Pesquisa/>
    </Appcontainer>
  );
}

export default Favoritos;
