import React from 'react'
import styled from 'styled-components'
import { media } from '../../styledConfig'

const TitleWrapper = styled.div`
    text-align: center;
    max-width: 350px;
    ${media.desktop1}{
        text-align: left;
    }
    ${media.desktop2}{
        margin-top: 35px;
        max-width: 400px;
    }
    & h1{
        color: ${props=>props.darkmode ? 'white' : props.theme.mainColor };
        ${media.desktop2}{
            font-size: 3rem;
        }
    }
    & p{
        margin-top: 20px;
        color:${props=>props.darkmode ? 'rgba(255,255,255,.5)': 'rgba(0,0,0,.5)' } ;
        font-weight: bold
    }
    
`

const TitleComponent = ({darkMode})=>{
    return(
        <TitleWrapper darkmode={darkMode}>
            <h1>
                10,000+ of our users love our products.
            </h1>
            <p>We only providae great products combined with excellent customer service. See what our satisfied customers are saying about our services.</p>    
        </TitleWrapper>
    )
}


export default TitleComponent