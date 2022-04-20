import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 50px;
    width: 100%;
    color: #fff;
    text-decoration: none;
    &:hover {
        background-color: #ffffff20;
    }
`;
const NavLink = ({ to, name }) => {
    return <Container to={to}>{name}</Container>;
};

export default NavLink;
