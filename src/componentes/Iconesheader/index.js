import perfil from '../../img/download-imagens/perfil.svg'
import sacola from '../../img/download-imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display:flex;
    align-items: center;  
`


const Icone = styled.li`
  margin-right: 40px;
  width:25px;
`

const icones = [perfil,sacola]

function Iconesheader(){
    return(
        <Icones>
          {icones.map( (icon) =>(
            <Icone><img src={icon}></img></Icone>
          ))}
        </Icones>
    )
}

export default Iconesheader;