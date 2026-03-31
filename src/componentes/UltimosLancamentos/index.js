import { livros } from './dadosUltimosLancamentos'
import {Titulo } from '../Titulo/index'
import styled from 'styled-components'
import livro2 from '../../img/download-imagens/livro2.png'
import CardRecomenda from '../CardRecomenda'

const SectionCard = styled.section`
    display:flex;
    justify-content:center;
    flex-direction:row;
`

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display:flex;
    flex-direction:column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display:flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos (){
    return(
        <UltimosLancamentosContainer>
                <Titulo 
                
                cor="#EB9B00"
                tamanhoFonte="36px"
                alinhamento="center"
                
                >ULTIMOS LANÇAMENTOS</Titulo>
                <NovosLivrosContainer>
                {livros.map(livros => (
                    <img src ={livros.src}></img>
                ))}
                </NovosLivrosContainer>

                <SectionCard>
                 <CardRecomenda
                    titulo="Recomendações"
                    subtitulo="Livro: Props no react"
                    descricao="Livro que ensina sobre props"
                    img={livro2}
                 
                 ></CardRecomenda>   

                <CardRecomenda
                    titulo="Recomendações"
                    subtitulo="Livro: Novo Livro"
                    descricao="Livro que ensina coisas novas"
                    img={livro2}
                 ></CardRecomenda>

                <CardRecomenda
                    titulo="Recomendações"
                    subtitulo="Livro: Velho livro"
                    descricao="Livro que ensina coisas velhas"
                    img={livro2}
                 ></CardRecomenda>
                 </SectionCard>
        </UltimosLancamentosContainer>
    )
    
}

export default UltimosLancamentos