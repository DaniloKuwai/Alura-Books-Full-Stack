import styled from "styled-components";


const DivCard = styled.div`
    background:${props => props.corfundo || '#FFF'};
    display:flex;
    justify-content:center;
    flex-direction:column;
    margin: 50px 20px;
    border:2px solid #FFF;
    width:300px;
` 
const TituloCard = styled.h3`
    display:flex;
    justify-content:center;
    color:${props => props.corletra || '#FFF'};
    font-size:30px;
    
`
const SubTituloCard = styled.h4`
    display:flex;
    justify-content:center;
    color:${props => props.corletra || '#FFF'};
    font-size:25px;

`   
const TextoCard = styled.p`
    display:flex;
    justify-content:center;
    color:${props => props.corletra || '#FFF'};
    font-size:20px;
`

const ImgCard = styled.img`
    padding: 15% 17%; 
    height: 236px;
    width: 200px;
`

const BotaoCard = styled.button`
    background: ${props => props.corfundobotaocard || '#000'};
    color: ${props => props.corletrabotaocard || '#FFF'};
    cursor:pointer;
    &:hover{
        background:${props => props.bghouver || '#00A89D'};
        color:${props => props.txthouver || '#000'};
    }
`

function CardRecomenda({titulo,subtitulo,descricao,img}){
    return(
        <DivCard corfundo="#006E68">
            <TituloCard corletra="#FFF9A5">{titulo}</TituloCard>
            <SubTituloCard corletra="#FFF9A5">{subtitulo}</SubTituloCard>
            <TextoCard corletra="#FFF9A5">{descricao}</TextoCard>
            <ImgCard src={img}/>
            <BotaoCard>Saiba Mais</BotaoCard>
        </DivCard>
    )
}

export default CardRecomenda;