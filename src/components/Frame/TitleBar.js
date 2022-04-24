import React from "react";
import styled from "styled-components";
const Titule = styled.h1`
    margin: auto;
    padding-left: 150px;
    font-size: 12px;
    user-select: none;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    color: #fff;
`;

const TitleBar = () => {
    return <Titule>Laboratorio Hospital de Ovalle</Titule>;
};

export default TitleBar;
