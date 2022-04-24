import React from "react";
import { Container } from "../components/Layouts";
import TableBasic from "../components/Tables/TableBasic";
import GetUserInfo from "../hooks/GetUserInfo";

const Home = (props) => {
    return (
        <Container>
            <GetUserInfo {...props} />
            <TableBasic />
        </Container>
    );
};

export default Home;
