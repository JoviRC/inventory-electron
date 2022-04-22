import styled from "styled-components";

const ContainerMain = styled.div`
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

export { ContainerMain, ModalContent, LogOut, LogOutConfirm, Box, BoxLogOut, Header };