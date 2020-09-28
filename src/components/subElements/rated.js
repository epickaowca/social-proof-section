import React from 'react'
import { ReactComponent as Star } from '../../asset/icon-star.svg'
import styled from 'styled-components'
import { media } from '../../styledConfig'

const Wrapper = styled.div`
    display: flex;
    background: ${props=>props.theme.subColor2};
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-radius: 10px;
    flex-direction: column;
    min-width: 230px;
    max-width: 350px;
    ${media.mobile}{
        max-width: unset;
        flex-direction: row;
        width: 500px;
        min-height: 60px;
        justify-content: flex-start;
        padding-left: 50px;
    }

    & p{
        font-weight: bold;
        white-space: nowrap;
        margin-top: 10px;
        padding: 0px 10px;
        ${media.mobile}{
            margin-top: 0px;
            margin-left: 50px;
        }
    }
    & svg{
        margin-left: 5px;
        &:nth-child(1){
            margin-left: 0px;
        }
    }
    `
const starTab = [1,2,3,4,5]
const Rated = (props)=>{
    const starView = starTab.map(id=><Star key={id} />)
    return(
        <Wrapper>
            <div>
                {starView}
            </div>
        <p>Rated 5 Star in {props.title}</p>
        </Wrapper>
    )
}

export default Rated