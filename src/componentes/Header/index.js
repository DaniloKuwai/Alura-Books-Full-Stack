import Logo from '../Logo/index.js'
import OpcoesHeader from '../Opcoesheader/index.js';
import Iconesheader from '../Iconesheader/index.js'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
        background-color: #FFF;
        display: flex;
        justify-content: center;

`

function Header(){
    return(
        <HeaderContainer>
        <Link to="/">    
        <Logo/>
        </Link>
        <OpcoesHeader/>
        <Iconesheader/>
        </HeaderContainer>
    )
}

export default Header;