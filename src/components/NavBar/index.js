import React from "react";
import NavLink from "./NavLink";
import { HiOutlineLogout } from "react-icons/hi";
import HeaderNav from "./HeaderNav";
import { ContainerMain, ModalContent, LogOut, LogOutConfirm, Box, BoxLogOut } from "./styled-nav";

const Nav = (props) => {
    const [confirm, serConfirm] = React.useState(false);
    function Close() {
        serConfirm(false);
        sessionStorage.removeItem("token");
        window.location.reload();
    }

    if (confirm) {
        return (
            <ModalContent>
                <h3>¿ Seguro que desea salir ?</h3>
                <LogOutConfirm onClick={() => Close()}>Si</LogOutConfirm>
                <LogOutConfirm onClick={() => serConfirm(false)}>No</LogOutConfirm>
            </ModalContent>
        );
    }

    return (
        <>
            <ContainerMain>
                <HeaderNav {...props} />
                <Box>
                    <NavLink to="/" name="Inicio" />
                    <NavLink to="/about" name="About" />
                </Box>
                <BoxLogOut>
                    <LogOut onClick={() => serConfirm(true)}>
                        <HiOutlineLogout />
                    </LogOut>
                </BoxLogOut>
            </ContainerMain>
        </>
    );
};

export default Nav;
