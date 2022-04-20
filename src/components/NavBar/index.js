import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    max-width: 200px;
    padding: 30px 0;
    width: 20%;
    background-color: #202035;
    color: #fff;
`;

const LogOut = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 50px;
    width: 100%;
    color: #fff;
    text-decoration: none;
    background-color: #ffffff00;
    border: none;
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #ffffff20;
    }
`;

const Nav = () => {
    return (
        <Container>
            <NavLink to="/" name="Inicio" />
            <NavLink to="/about" name="About" />
            <LogOut
                onClick={() => {
                    sessionStorage.removeItem("token");
                    window.location.reload();
                }}
            >
                LogOut
            </LogOut>
        </Container>
    );
};

export default Nav;
