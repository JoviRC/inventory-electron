import styled from "styled-components";

const Input = styled.input`
    width: 200px;
    height: 30px;
    margin: 8px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    background-color: #f2f2f270;
    color: #fff;
    outline: none;
    text-align: center;
    &::placeholder {
        color: #fff;
    }
    &:hover {
        &::placeholder {
            color: #ffffff80;
        }
    }
`;
const ButtonSubmit = styled.button`
    width: 200px;
    height: auto;
    margin: 8px;
    padding: 8px;
    border-radius: 8px;
    border: none;
    background-color: #404040;
    margin: 8px;
    padding: 8px 16px;
    color: #fff;
    font-size: 18px;
    outline: none;
    &:hover {
        background-color: #303030;
    }
    &:focus {
        outline: none;
    }
    &:active {
        background-color: #303030;
    }
`;
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: calc(100vh - 30px);
    min-width: 800px;
    outline: none;
`;
const ContainerError = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: auto;
    min-width: 800px;
    outline: none;
`;

const TextError = styled.p`
    color: #ffffff;
    font-size: 32px;
    margin: 8px;
`;
const TextErrorEmail = styled.p`
    color: #ff9090;
    font-size: 32px;
    margin: 8px;
    height: auto;
    width: auto;
`;

export { Input, ButtonSubmit, Container, ContainerError, TextError, TextErrorEmail };
