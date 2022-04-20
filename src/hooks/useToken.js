import { useState } from "react";

export default function useToken() {
    cosnt [token, setToken] = useState(null);
    {localStorage.getItem("token") ? setToken(localStorage.getItem("token")) : localStorage.setItem("token", null)}
    return token;
}
