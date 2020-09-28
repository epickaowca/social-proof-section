import React from 'react'
import Rated from '../subElements/rated'
import styled from 'styled-components'
import {media} from '../../styledConfig'

const ratedTab = ['Reviews', 'Report Guru', 'BestTech']

const RatedWrapper=styled.div`
    max-width: 500px;
        & div{
            margin: 10px 0px;
            ${media.desktop2}{
                &:nth-child(1){
                    margin-left: 0px;
                }
                &:nth-child(2){
                    margin-left: 50px;
                }
                &:nth-child(3){
                    margin-left: 100px;
                }
            }
            & div{
                margin: unset;
            }
        }
`

const Rate = ()=>{
    return(
        <RatedWrapper>
            {ratedTab.map(title=><Rated key={title} title={title} />)}
        </RatedWrapper>
    )
}

export default Rate