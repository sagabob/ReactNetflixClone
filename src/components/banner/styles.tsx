import styled from "@emotion/styled";
import { BannerBackgroundProps } from "./types";

export const Background = styled.div<BannerBackgroundProps>`
    height: 650px;
    color: white;
    object-fit: contain;
    margin-bottom: 20px;
    background: url(${({ src }) => (src ? src : "../images/misc/home-bg.jpg")}) center top / cover;
    display:flex;
    flex-direction: column;  
    flex-flow: row wrap;
    justify-content: flex-start;  
    object-fit: contain;
   
`;

export const Content = styled.div`   
    height: 70%; 
         
`;

export const Heading = styled.h1`
    
`;

export const ButtonArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top:20px;
`;

export const Feature = styled.div`
  margin-top: 150px;
  margin-left: 30px;
  flex-direction: column;
  align-items: normal;
  width: 40%;
  align-content: space-between;
    
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

export const DetailButton = styled(Button)`  
    background-color: rgba(51, 51, 51, 0.4);
    &:hover {    
        color: #fff;  
        background-color: rgba(51, 51, 51);
        transition: all 0.2s;
    }
`;

export const Description = styled.p`
    font-weight: 500;
    margin-top: 20px;
    font-size: 1.2rem;
    line-height: 1.1;
`;

export const FadeBottom = styled.div`
    height: 30%;       
    margin-top: auto;
    width: 100%;
    background-image: linear-gradient(
        180deg,
        transparent,
        rgba(37, 37, 37, 0.61),
        #111
      );
`;