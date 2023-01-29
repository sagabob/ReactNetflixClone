import styled from "@emotion/styled";
import { NavbarAreaProps, NavbarSearchInputProps } from "./types";
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
    padding: 0 30px;
`;


export const Logo = styled.img`
  height: 30px;
  width: 100px;
  margin-right: 30px;
`;

export const LeftMenuArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;   
    height: 100%;
`;

export const RightMenuArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center; 
    flex-grow: 1;    
    height: 100%;
`;

export const LeftMenu = styled.ul`
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
`;

export const LeftMenuItem = styled.li`
  display: block;
  margin-right: 20px;  
`;

export const RightMenuButton = styled.a`
  display: block;
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1rem;
`;

export const SearchArea = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input<NavbarSearchInputProps>`
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  margin-left: ${({ active }) => (active === true ? '10px' : '0')};
  padding: ${({ active }) => (active === true ? '0 10px' : '0')};
  opacity: ${({ active }) => (active === true ? '1' : '0')};
  width: ${({ active }) => (active === true ? '200px' : '0px')};

  &:focus {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

export const SearchIcon = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
`;

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  text-decoration: none;
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;      
  background-color: rgba(51, 51, 51, 0.5);  
  font-size: 1rem;
  border-radius: 3px;
  &:hover {
    background: #f40612;
  }
`;