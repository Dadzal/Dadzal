import React from 'react';
import '../App.css'
// import './HeroSection.css';
import styled from 'styled-components';

const Wrapper = styled.div`
    background:url('./images/heroe.jpg');
    background-size: cover;
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    justify-content: center;
    margin-bottom: 3rem;

    h1{
        font-size:29px;
        color:red;
    }

    p{
        font-size:21px;
        color:red;
    }
`;


function HeroSection() {
    return(
        <Wrapper>
             {/* <video src="/videos/video-2.mp4" autoPlay loop muted /> */}
             <h1>Mfakose React App</h1>
             <p>Let's Do This</p>
        </Wrapper>
    )
}

export default HeroSection


