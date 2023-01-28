import styled from "@emotion/styled";
import { NavbarAreaProps } from "./types";

export const Area = styled.div<NavbarAreaProps>`
    position: fixed;
    top: 0;
    width: 100%;
    height: 30px;
    z-index: 10;
    ${({ isScrolled }) => (isScrolled ? "background-color: #111" : "background-color: rgba(51, 51, 51, 0.1)")};
    display: flex;
    margin: 0 3.5rem;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
    }

    /* Animations */
    transition-timing-function: ease-in;
    transition: all 0.5s;  
`;