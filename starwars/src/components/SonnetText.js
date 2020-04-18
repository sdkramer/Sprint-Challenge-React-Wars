// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
display: flex;
margin: 10px;
padding: 5px;
border: 2px solid saddlebrown;
background-color: transparent;
box-shadow: 0px 1px 6px 7px black;
`;

const Text = styled.h2`
color: rgba(255, 239, 239, 0.644);
font-family: "Goudy Old Style", Garamond, serif;
`;

const DetailsList = styled.div`
color: #09421a;
`;


const SonnetText = ({sonnetsList}) => {


  return (
    <WrapperDiv>
      <Text>
        
        {sonnetsList && sonnetsList.map((sonnet, index) => 
        <React.Fragment>
        <div key={index}>{sonnet.title}</div>
        <br></br>
        <div key={index}>{sonnet.lines}</div>
        </React.Fragment>)
        }
      </Text>
    </WrapperDiv>
  )
}

export default SonnetText;