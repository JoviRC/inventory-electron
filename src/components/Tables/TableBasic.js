import React from "react";
import jwt_decode from "jwt-decode";
import { _HOST_URL_ } from "../../hooks/Auth_Hooks";
const axios = require("axios").default;

const TableBasic = () => {
    const [data, setData] = React.useState([]);
    const [authType, setAuthType] = React.useState(null);
    const [userAuth, , setUserAuth] = React.useState(null);

    React.useEffect(() => {
        const decoder = jwt_decode(sessionStorage.getItem("token"));
        sessionStorage.setItem("userLog", JSON.stringify(decoder));
    }, []);
    React.useEffect(() => {
        const token = sessionStorage.getItem("token");
        const email = JSON.parse(sessionStorage.getItem("userLog")).email;
        axios
            .get(_HOST_URL_ + "/users", {
                headers: {
                    Authorization: "Bearer " + token,
                },
                params: {
                    email: email,
                },
            })
            .then((res) => {
                console.log(res.data[0]);
                setUserAuth(res.data[0].account_type);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(_HOST_URL_ + "/roles", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            .then((res) => {
                const user = JSON.parse(sessionStorage.getItem("userLog"));
                console.log(res.data[0].products);
                setAuthType(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

        axios
            .get(_HOST_URL_ + "/products", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res.data);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <table key={index}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>costo</th>
                            </tr>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.cost}</td>
                            </tr>
                        </thead>
                    </table>
                );
            })}
        </div>
    );
};

export default TableBasic;
