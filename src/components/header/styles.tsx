import styled from "styled-components/macro";
import { Link as ReachRouterLink } from "react-router-dom";
import { HeaderBackgroundProps } from "./types";

export const ButtonLink = styled(ReachRouterLink)`
  display: block;
  background-color: #e50914;
  color: white;
  border: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: normal;
  border-radius: 3px;
  padding: 7px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
`;

export const Background = styled.div<HeaderBackgroundProps>`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.35)),
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg")}) top left / cover no-repeat;
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 45px;
  width: 167px;

  @media only screen and (max-width: 349px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px) {
    height: 24px;
    width: 30%;
  }
`;
