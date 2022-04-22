import React, { useState, useEffect } from "react";
import { _HOST_URL_, _RESOURCE_LOGIN_ } from "../../hooks/Auth_Hooks";
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
    width: auto;
    height: auto;
    border-radius: 15px;
    border: 1px solid #ffffff80;
    background-color: #202020;
    margin: 8px;
    padding: 8px 16px;
    color: #fff;
    font-size: 18px;
    &:focus {
        outline: none;
    }
    &:active {
        background-color: #252525;
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

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);
    const [isSusses, setSusses] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            };
            fetch(_HOST_URL_ + _RESOURCE_LOGIN_, requestOptions)
                .catch(setError(true))
                .then((response) => response.json())
                .catch(setToken(""))
                .then((data) => {
                    sessionStorage.setItem("token", data.access_token);
                    sessionStorage.setItem(
                        "user",
                        JSON.stringify({ email: email, password: password })
                    );
                    setToken(data.access_token);
                })
                .catch(setToken(""));
        }
        setSubmitted(false);
    }, [isSubmitted]);

    if (isError) {
        return (
            <Container>
                <h1>Usuario no Valido</h1>
                {setTimeout(() => {
                    setError(false);
                }, 2000)}
            </Container>
        );
    }

    return (
        <Container>
            <Input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonSubmit type="submit" onClick={() => setSubmitted(true)}>
                <span>Entrar</span>
            </ButtonSubmit>
        </Container>
    );
};
export default Login;
