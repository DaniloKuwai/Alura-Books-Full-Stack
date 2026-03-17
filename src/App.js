import HEADER from '../src/componentes/Header/index.js'
import styled from 'styled-components'

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
      <HEADER/>
    </Appcontainer>
  );
}

export default App;
