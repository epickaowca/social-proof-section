import React from 'react'
import styled from 'styled-components'
import Profil from '../subElements/profil'
import { media } from '../../styledConfig'
import { useSelector } from 'react-redux'

const CardContainer = styled.div`
    background: ${props=>props.darkmode===true ? props.theme.subColor1 : props.theme.mainColor };
    max-width: 350px;
    padding: 25px;
    color: white;
    border-radius: 10px;
    & p{
        margin-top: 25px;
        ${media.desktop1}{
            font-size: .9rem;
        }
        ${media.desktop2}{
            font-size: 1rem
        }
    }
    ${media.desktop1}{
        max-width: 280px;
    }
    ${media.desktop2}{
        max-width: 350px;
    }
`

const Card = ({props})=>{
    const { title, img, content} = props;
    const state = useSelector(state=>state);
    return(
        <CardContainer darkmode={state}>
            <Profil title={title} img={img} />
            <p>{content}</p>
        </CardContainer>
    )
}

export default Card