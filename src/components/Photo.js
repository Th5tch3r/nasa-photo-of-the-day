import React from "react";

import styled from 'styled-components';

const WrapperImg = styled.img`
    width: 50%;
    height: 50%;
    `;

export default function Card(props) {
    return (
        <div>
            <WrapperImg src={props.photo} size="tiny"/>
        </div>
    )
}