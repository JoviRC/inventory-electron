import React, { useState, useEffect } from "react";
import { _HOST_URL_, _RESOURCE_LOGIN_ } from "../../hooks/Auth_Hooks";

function PostRequestHooks({ credencials }) {
    const [token, setToken] = useState(null);

    console.log(credencials.email);

    useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: credencials.email, password: credencials.password }),
        };
        fetch(_HOST_URL_ + _RESOURCE_LOGIN_, requestOptions)
            .catch(setToken(""))
            .then((response) => response.json())
            .catch(setToken(""))
            .then((data) =>  localStorage.setItem("token", data.access_token))
            .catch(setToken(""));
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

}

export { PostRequestHooks };
