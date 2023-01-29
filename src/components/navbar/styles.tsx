import styled from "@emotion/styled";
import { NavbarAreaProps } from "./types";
import { Link as ReachRouterLink } from "react-router-dom";


export const Area = styled.div<NavbarAreaProps>`
    position: fixed;
    top: 0;
    width: 100%;
    height: 70px;
    z-index: 10;
    ${({ isScrolled }) => (isScrolled ? "background-color: #111" : "background-color: rgba(51, 51, 51, 0.1)")};
    display: flex;    
    justify-content: space-between;
    align-items: center;   
`;


export const Logo = styled.img`
  height: 30px;
  width: 100px;
`;

export const LeftMenuArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;   
`;

export const RightMenuArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center; 
`;

export const LeftMenu = styled.ul`
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const LeftMenuItem = styled.li`
  display: block;
  background-color: #e50914;
  color: white;
  &:hover {
    background: #f40612;
  }
`;

