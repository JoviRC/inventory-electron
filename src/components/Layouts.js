import React from "react";
import styled from "styled-components";
const Layout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f5f5f5;
    color: #333;
    margin: 0;
    padding: 0;
    border-radius: 20px 0 0 20px;
`;
export const Container = (props) => {
    return <Layout>{props.children}</Layout>;
};
