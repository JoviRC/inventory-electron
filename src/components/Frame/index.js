import React from "react";
import styled from "styled-components";
import {
    VscChromeMinimize,
    VscChromeMaximize,
    VscChromeClose,
    VscChromeRestore,
} from "react-icons/vsc";
import TitleBar from "./TitleBar.js";

require("../../renderer.js");
const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    top: 0;
    width: 100%;
    height: 30px;
    background-color: #202035;
    color: #fff;
    -webkit-app-region: drag;
`;
const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 50px;
    user-select: none;
    -webkit-app-region: no-drag;
    -webkit-user-select: none;
    &:hover {
        background-color: #ffffff20;
    }
`;
const FrameBar = React.memo(() => {
    return (
        <Container>
            <TitleBar />
            <Button id="min-button">
                <VscChromeMinimize />
            </Button>
            <Button id="restore-button">
                <VscChromeRestore />
            </Button>
            <Button id="max-button">
                <VscChromeMaximize />
            </Button>
            <Button id="close-button">
                <VscChromeClose />
            </Button>
        </Container>
    );
});

export default FrameBar;
