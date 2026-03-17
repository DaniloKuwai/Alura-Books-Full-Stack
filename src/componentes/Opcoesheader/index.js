import styled from 'styled-components';

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding:0 5px;
    cursor:pointer;
    font-size:16px;
    min-width: 120px;
`

const Opcoes = styled.ul`
    display: flex;
    margin-left:60px;
`


const textoOpcoes = ['CATEGORIAS','MINHA ESTANTE','FAVORITOS']

function OpcoesHeader(){
    return(
        <Opcoes>
            {textoOpcoes.map ( (texto) =>(
                <Opcao>{texto}</Opcao>
            ))}
        </Opcoes>    
        ) 
}

export default OpcoesHeader;

