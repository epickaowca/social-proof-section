import styled from 'styled-components'


const MainContainer = styled.div`
    min-height: 100vh;
    background: ${props=>props.darkmode===true ? "black" : "white"};
`

export default MainContainer