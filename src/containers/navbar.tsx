import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import * as ROUTES from "../constants/routes";

export function NavbarContainer() {
    const [isScrolled, setScroll] = useState(false);

    const scrollListner = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else setScroll(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListner);
        return () => {
            window.removeEventListener("scroll", scrollListner);
        };
    }, []);
    return (

        <Navbar isScrolled={isScrolled}>
            <Navbar.LeftMenuArea>
                <Navbar.Logo to={ROUTES.HOME} src="/images/logo.svg" alt="Netflix" />
                <Navbar.LeftMenu>
                    <Navbar.LeftMenuItem>
                        
                    </Navbar.LeftMenuItem>
                </Navbar.LeftMenu>
            </Navbar.LeftMenuArea>
        </Navbar>
    );
}