import React from "react";
import jwt_decode from "jwt-decode";
import { _HOST_URL_ } from "../../hooks/Auth_Hooks";
const axios = require("axios").default;

const TableBasic = () => {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const decoder = jwt_decode(sessionStorage.getItem("token"));
        sessionStorage.setItem("userLog", JSON.stringify(decoder));
    }, []);
    React.useEffect(() => {
        const token = sessionStorage.getItem("token");
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
