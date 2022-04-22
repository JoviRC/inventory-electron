import React from "react";
import { useEffect } from "react";
import { _HOST_URL_ } from "../../hooks/Auth_Hooks";
const axios = require("axios").default;

const HeaderNav = React.memo((props) => {
    const [userLogup, setUserLogup] = React.useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");

        const requestOptions = {
            headers: { authorization: "Bearer " + token, "Content-Type": "application/json" },
            params: { email: JSON.parse(sessionStorage.getItem("user")).email },
        };
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

    return <div>{userLogup.name}</div>;
});

export default HeaderNav;
