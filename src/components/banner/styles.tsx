import styled from "@emotion/styled";
import { BannerBackgroundProps } from "./types";

export const Background = styled.div<BannerBackgroundProps>`
    height: 650px;
    color: white;
    object-fit: contain;
    margin-bottom: 20px;
    background: url(${({ src }) => (src ? src : "../images/misc/joker1.jpg")}) center center / cover;
`;

export const Content = styled.div`
    margin-left: 30px;
    padding-top: 140px;
    height: 300px;
`;

export const Heading = styled.h1`
    margin-bottom: 10px;
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const Button = styled.button`
    cursor: pointer;
    color: #fff;
    outline: none;
    border: none;
    font-weight: 700;
    border-radius: 0.2vw;
    padding: 0.5rem 1.5rem;      
    background-color: rgba(51, 51, 51, 0.5);
    margin-right: 1rem;
    font-size: 1.3rem;
    &:hover {
        color: #000;
        background-color: #e6e6e6;
        transition: all 0.2s;
    }
`;

export const Description = styled.p`
    font-weight: 400;
`;

export const FadeBottom = styled.div`
    height: 220px;
    background-image: linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111);
    
`;