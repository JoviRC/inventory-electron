import React from "react";
import {useEffect} from "react";

const HeaderNav = (props) => {
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        let d;
        d = sessionStorage.getItem("user");
        d = JSON.parse(d);
        setUser(d.email);
    }, []);

    return <div>{user}</div>;
};

export default HeaderNav;
