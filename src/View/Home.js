import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import MainElem from '../components/MainElem'
import CardElem from '../components/CardElem'
import Button from '../components/Button'
import MainContainer from '../components/elements/mainContainer'

const Home = ()=>{
    const state = useSelector(state=>state);
    useEffect(()=>{
       console.log(state); 
    })
    return(
        <MainContainer darkmode={state}>
            <Button />
            <MainElem />
            <CardElem />
        </MainContainer>
    )
}

export default Home