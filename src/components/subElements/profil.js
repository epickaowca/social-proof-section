import React from 'react'
import styled from 'styled-components'

let ProfilContainer = styled.div`
    display: flex;
    & img{
        border-radius: 50%;
    }
    & span{
        margin-left: 10px;
        & p{
            margin-top: 5px;
            opacity: .7
        }
    }
`

const profil = ({img, title})=>{
    return(
        <ProfilContainer>
            <img alt="profileImage" src={require(`../../asset/${img}`)}></img>
            <span>
                <b>{title}</b>
                <p>Verified Buyer</p>
            </span>
        </ProfilContainer>
    )
}


export default profil
