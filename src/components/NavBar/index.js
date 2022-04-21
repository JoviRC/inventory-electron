import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { HiOutlineLogout } from "react-icons/hi";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    max-width: 200px;
    padding-top: 30px;
    width: 20%;
    height: calc(100vh - 60px);
    background-color: #202035;
    color: #fff;
`;
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    width: 30%;
    height: calc(100vh - 30px);
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
    border-radius: 50%;
    text-decoration: none;
    background-color: #ffffff00;
    border: none;
    transform: rotate(180deg);
    &:focus {
        outline: none;
    }
    &:hover {
        background-color: #ffffff20;
    }
`;
const LogOutConfirm = styled.button`
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

const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
const BoxLogOut = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px auto 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const Nav = (props) => {
    const [confirm, serConfirm] = React.useState(false);
    const userCurrent = props.currentUser;
    function Close() {
        serConfirm(false);
        sessionStorage.removeItem("token");
        window.location.reload();
    }

    if (confirm) {
        return (
            <ModalContent>
                <h3>¿ Seguro que desea salir ?</h3>
                <LogOutConfirm onClick={() => serConfirm(false)}>No</LogOutConfirm>
                <LogOutConfirm onClick={() => Close()}>Si</LogOutConfirm>
            </ModalContent>
        );
    }

    return (
        <>
            <Container>
                <Header>Usuario {userCurrent}</Header>
                <Box>
                    <NavLink to="/" name="Inicio" />
                    <NavLink to="/about" name="About" />
                </Box>
                <BoxLogOut>
                    <LogOut onClick={() => serConfirm(true)}>
                        <HiOutlineLogout />
                    </LogOut>
                </BoxLogOut>
            </Container>
        </>
    );
};

export default Nav;
