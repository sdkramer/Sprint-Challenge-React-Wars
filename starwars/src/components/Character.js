// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
display: flex;
padding: 5px;
border: 2px solid saddlebrown;
background-color: transparent;
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
`;

const NameText = styled.h2`
color: black;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const DetailsList = styled.div`
color: #09421a;
`;


const Character = ({charactersList}) => {


  return (
    <WrapperDiv>
      <NameText></NameText>
    </WrapperDiv>
  )
}