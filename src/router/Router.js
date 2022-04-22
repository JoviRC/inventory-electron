import React, { useState } from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import Nav from "../components/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import styled from "styled-components";
import FrameBar from "../components/Frame";
import Login from "../components/Login";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    min-height: calc(100vh - 30px);
    min-width: 800px;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const RouterApp = () => {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    return (
        <MemoryRouter>
            <Body>
                <FrameBar />
                <Container>
                    {!token || token.length === 0 || token === undefined || token === null ? (
                        <Login setToken={setToken} />
                    ) : (
                        <>
                            <Nav />
                            <Switch>
                                <Route exact path="/" component={() => <Home />} />
                                <Route exact path="/about" component={() => <About />} />
                            </Switch>
                        </>
                    )}
                </Container>
            </Body>
        </MemoryRouter>
    );
};

export default RouterApp;
