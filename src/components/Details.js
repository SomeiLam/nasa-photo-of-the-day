import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0%{
        opacity: 0;
        transform: scale(0.1);
    }
    100% {
        opacity: 0.5;
        transform: scale(1);
    }
`

const StyledDetails = styled.div`
    opacity: 0.5;
    padding: 10%;
    border-radius: 10% / 50%;
    background-color: rgb(10, 10, 10);
    animation: ${fadeIn} 0.8s;
`

export default function Details(props) {
    const { explanation, copyright } = props;

    return (
        <StyledDetails className='detailsContainer'>
            <div>
               <h3>Explanation: </h3>
                <p className='explanation'>{explanation}</p>
                <p className='copyright'>Copyright: {copyright}</p> 
            </div>
            
        </StyledDetails>
    )
}