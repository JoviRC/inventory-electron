import React, { useState, useEffect } from "react";
import { _HOST_URL_, _RESOURCE_LOGIN_ } from "../../hooks/Auth_Hooks";
import {
    Input,
    ButtonSubmit,
    Container,
    ContainerError,
    TextError,
    TextErrorEmail,
} from "./styled_index";
import { jwt_decode } from "jwt-decode";
const axios = require("axios").default;

const Login = ({ setToken }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emptyEmail, setEmptyEmail] = useState(false);
    const [emptyPassword, setEmptyPassword] = useState(false);
    const [bouthEmpty, setBothEmpty] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);
    const [isSuccess, setSuccess] = useState(false);
    const [isError, setError] = useState(false);

    useEffect(() => {
        if (email.length === 0 && password.length === 0) {
            setBothEmpty(true);
        }
        if (email.length === 0) {
            setEmptyEmail(true);
        }
        if (password.length === 0) {
            setEmptyPassword(true);
        }
        if (email.length > 0 && password.length > 0) {
            setSubmitted(true);
        }
        if (isSubmitted) {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: email, password: password }),
            };
            fetch(_HOST_URL_ + _RESOURCE_LOGIN_, requestOptions)
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    } else {
                        setError(true);
                        console.log("Error: " + response.status);
                        return response.json();
                    }
                })
                .then((data) => {
                    if (data.access_token !== undefined) {
                        sessionStorage.setItem("token", data.access_token);
                        setToken(sessionStorage.getItem("token"));
                    }
                });
        }
        setSubmitted(false);
    }, [isSubmitted]);
    //
    //returns
    //

    if (isError) {
        if (bouthEmpty) {
            return (
                <Container>
                    <ContainerError>
                        <TextError>Correo y contraseña estan vacias</TextError>
                    </ContainerError>
                    <ButtonSubmit
                        onClick={() => {
                            setError(false);
                            setEmail("");
                            setPassword("");
                            setBothEmpty(false);
                            setEmptyEmail(false);
                            setEmptyPassword(false);
                        }}
                    >
                        Regresar
                    </ButtonSubmit>
                </Container>
            );
        }

        if (emptyEmail) {
            return (
                <Container>
                    <ContainerError>
                        <TextErrorEmail>Correo esta vacio</TextErrorEmail>
                    </ContainerError>
                    <ButtonSubmit
                        onClick={() => {
                            setError(false);
                            setEmail("");
                            setPassword("");
                            setEmptyEmail(false);
                        }}
                    >
                        Regresar
                    </ButtonSubmit>
                </Container>
            );
        }
        if (emptyPassword) {
            return (
                <Container>
                    <ContainerError>
                        <TextErrorEmail>Ingrese una contraseña valida</TextErrorEmail>
                    </ContainerError>
                    <ButtonSubmit
                        onClick={() => {
                            setError(false);
                            setEmail("");
                            setPassword("");
                            setEmptyPassword(false);
                        }}
                    >
                        Regresar
                    </ButtonSubmit>
                </Container>
            );
        }

        return (
            <Container>
                <ContainerError>
                    <TextError>Usuario</TextError>
                    <TextErrorEmail>{email}</TextErrorEmail>
                    <TextError>no valido</TextError>
                </ContainerError>
                <ButtonSubmit
                    onClick={() => {
                        setError(false);
                        setEmail("");
                        setPassword("");
                    }}
                >
                    Regresar
                </ButtonSubmit>
            </Container>
        );
    }

    return (
        <Container>
            <Input
                required={true}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <Input
                required={true}
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
