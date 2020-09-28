import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../actions'

let ButtonElem = styled.div`
    z-index: 2;
    position: absolute;
    right: 10px;
    top: 20px;
  
    & span{
        cursor: pointer;
        display: block;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        border: 2px solid ${props=>props.theme.mainColor};
        transition: all .5s ease;
        transform: ${props=>props.darkmode===true ? 'translateX(50px)': 'translateX(0px)'};
    }
    & input{
        cursor: pointer;
        appearance: none;
        outline: none;
        width: 100px;
        height: 50px;
        border: ${props=>props.darkmode===true ? '3px solid white' : '3px solid'+props.theme.mainColor };
        border-radius: 40px;
    }
` 

const Button = ()=>{
    const dispatch = useDispatch()
    const state = useSelector(state=>state);
    useEffect(()=>{
        console.log(state);
    }, [state])

    return(
        <ButtonElem darkmode={state}>
            <input onClick={()=>dispatch(toggleMode())} type="checkbox"></input>
            <span onClick={()=>dispatch(toggleMode())}></span>
        </ButtonElem>
    )
}


export default Button