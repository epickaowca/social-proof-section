import React from 'react'
import Rate from './elements/Rate'
import TitleComponent from './elements/TitleComponent'
import styled from 'styled-components'
import { media } from '../styledConfig'
import { useSelector } from 'react-redux'

const MainContainerElem = styled.div`
    position: relative;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1400px;
    ${media.desktop1}{
        padding-top: 100px;
        flex-direction: row;
        justify-content: center;
    }
    ${media.desktop2}{
        margin: auto;
        padding: 0 100px;
        padding-right: 150px;
        justify-content: space-between;
    }
    
`

const MainElem = ()=>{
    const state = useSelector(state=>state)
    return(
        <MainContainerElem>
            <TitleComponent darkMode={state} />
            <Rate />
        </MainContainerElem>
    )
}


export default MainElem