import React from "react";
import styled from "styled-components";

const Headerwrap = styled.h1`
    color: white;
    text-shadow: 0 0 5px #FF0000, 0 0 8px #0000FF; 
`;

const Welcome = () => {
    return (
        <Headerwrap>Astronomy Photo Of Today! </Headerwrap>
    );
};

export default Welcome; 