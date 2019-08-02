import React from "react";

import styled from 'styled-components';

const WrapperImg = styled.img`
    width: 70%;
    height: 70%;
    margin-top: 30px;
    margin-bottom: 30px;
    box-shadow: 0 0 10px #9ecaed, 0 0 15px #0000FF;
    border-radius: 8px;
    `;

const WrapperP = styled.p`
    color: white;
    display: flex;
    justify-content: center;
    height: 60%;
    `;

export default function Card(props) {
    return (
        <div>
            <WrapperImg src={props.photo}/>
            <WrapperP>{props.message}</WrapperP>
        </div>
    )
}