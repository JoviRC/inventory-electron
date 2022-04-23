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

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
`;

const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 80%;
    height: 40px;
    border-radius: 10px;
    background-color: #ffffff40;
    margin: 4px 0px;
`;
const HeaderIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
`;
const HeaderTextDiv = styled.div`
    margin: 10px auto 10px auto;
    height: 110px;
    width: 40px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-y: scroll;
    transform: rotate(-90deg);
    
    &::-webkit-scrollbar {
        display: none;
    }
`;
const HeaderText = styled.h1`
    text-align: center;
    font-size: 16px;
    font-weight: lighter;
    height: calc(width + 10px);
    width: auto;
    transform: rotate(90deg);
    user-select: none;
    
`;

export {
    HeaderText,
    HeaderTextDiv,
    HeaderIcon,
    HeaderBox,
    HeaderDiv,
    ContainerMain,
    ModalContent,
    LogOut,
    LogOutConfirm,
    Box,
    BoxLogOut,
    Header,
};
