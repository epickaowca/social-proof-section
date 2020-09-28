import React from 'react'
import styled from 'styled-components'
import Card from './elements/Card'
import { media } from '../styledConfig'

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
    margin-top: 50px;
    ${media.desktop1}{
        flex-direction: row;
        justify-content: center;
    }
    & div{
        margin: 15px 0px;
        ${media.desktop1}{
            margin: 10px;
        }
        ${media.desktop2}{
            &:nth-child(2){
                margin-top: 50px;
            }
            &:nth-child(3){
                margin-top: 100px;
            }
        }
    }
`

const cardTab=[
    {
        id: 1,
        title: 'Colton Smith',
        img: 'image-colton.jpg',
        content: '"We needed the same printed design as the one we gad ordered a week prior. Not only did they find the original order, but we also reveiced it in time. Excellent!"'
    },
    {
        id: 2,
        title: 'Irene Roberts',
        img: 'image-irene.jpg',
        content: '"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery"'
    },
    {
        id: 3,
        title: 'Anne Wallace',
        img: 'image-anne.jpg',
        content: '"Put an order with this company and can only praise them for the very high standard. Will definitly use them again and recommend them to everyone!"'
    },
]

const CardElem = ()=>{
    return(
        <CardContainer>
            {cardTab.map(cardElem=><Card key={cardElem.id} props={cardElem}/>)}
        </CardContainer>
    )
}

export default CardElem;