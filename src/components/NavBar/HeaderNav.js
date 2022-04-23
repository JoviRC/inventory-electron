import React from "react";
import { HeaderDiv, HeaderBox, HeaderIcon, HeaderTextDiv, HeaderText } from "./styled-nav";
import { useEffect } from "react";
import { _HOST_URL_ } from "../../hooks/Auth_Hooks";
import { RiUserFill } from "react-icons/ri";
import { MdAlternateEmail, MdSecurity } from "react-icons/md";
const axios = require("axios").default;

const HeaderNav = React.memo((props) => {
    const [userLogup, setUserLogup] = React.useState(null);
    const token = sessionStorage.getItem("token");
    const requestOptions = {
        headers: { authorization: "Bearer " + token, "Content-Type": "application/json" },
        params: { email: JSON.parse(sessionStorage.getItem("user")).email },
    };
    useEffect(() => {
        axios.get(_HOST_URL_ + "/users", requestOptions).then((response) => {
            if (response.status === 200) {
                setUserLogup(response.data[0]);
            }
        });
    }, []);

    if (userLogup === null) {
        return (
            <>
                <h3>Cargando...</h3>
            </>
        );
    }

    //uppercase first letter
    const firstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <HeaderDiv>
            <HeaderBox>
                <HeaderIcon>
                    <RiUserFill />
                </HeaderIcon>
                <HeaderTextDiv>
                    <HeaderText>
                        {firstLetter(userLogup.name) +
                            " " +
                            firstLetter(userLogup.lastname) +
                            " " +
                            firstLetter(userLogup.surname)}
                    </HeaderText>
                </HeaderTextDiv>
            </HeaderBox>
            <HeaderBox>
                <HeaderIcon>
                    <MdAlternateEmail />
                </HeaderIcon>
                <HeaderTextDiv>
                    <HeaderText>{userLogup.email}</HeaderText>
                </HeaderTextDiv>
            </HeaderBox>
            {userLogup.account_type === "admin" ? (
                <HeaderBox>
                    <HeaderIcon>
                        <MdSecurity />
                    </HeaderIcon>
                    <HeaderTextDiv>
                        <HeaderText>{firstLetter(userLogup.account_type)}</HeaderText>
                    </HeaderTextDiv>
                </HeaderBox>
            ) : null}
        </HeaderDiv>
    );
});

export default HeaderNav;
