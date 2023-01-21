import React, { useState, useContext, createContext } from 'react';
import { Body, Container, Frame, Header, Inner, Item, Title } from './styles';
import { AccordionBodyProps, AccordionFrameProps, AccordionHeaderProps, AccordionItemProps, AccordionProps, AccordionTitleProps } from './types';
export default function Accordion({ children, ...restProps }: AccordionProps) {
    return (
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    );
  }

  Accordion.Title = function AccordionTitle({ children, ...restProps }: AccordionTitleProps) {
    return <Title {...restProps}>{children}</Title>;
  };
  
  Accordion.Frame = function AccordionFrame({ children, ...restProps }: AccordionFrameProps) {
    return <Frame {...restProps}>{children}</Frame>;
  };
  
  
Accordion.Item = function AccordionItem({ children, ...restProps }: AccordionItemProps) {
      
    return (
        <Item {...restProps}>{children}</Item>
    );
  };

  Accordion.Header = function AccordionHeader({ children, itemName,...restProps }: AccordionHeaderProps) {
    
  
    return (
      <Header  {...restProps}>
        {children}
        <img src="/images/icons/close-slim.png" alt="Close" />
      </Header>
    );
  };
  
  Accordion.Body = function AccordionBody({ children, itemName, ...restProps }: AccordionBodyProps) {
      
    /* return toggleShow ? <Body {...restProps}>{children}</Body> : null; */
  
    return (
      <Body className={ 'closed'} {...restProps}>
        <span>{children}</span>
      </Body>
    );
  };
  