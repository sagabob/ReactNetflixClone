
import { ToggleContext } from '../../context/toggle-context';
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

Accordion.Header = function AccordionHeader({ children, itemName, ...restProps }: AccordionHeaderProps) {
  const { toggleItem, setToggleItem } = ToggleContext.useContext()
  const checkItemHandler = (item: string) => {
    if (item === toggleItem)
      setToggleItem("")
    else
      setToggleItem(item)
  }

  return (
    <Header  {...restProps} onClick={() => checkItemHandler(itemName)}>
      {children}
      {itemName === toggleItem ? (<img src="/images/icons/close-slim.png" alt="Close" />) : (<img src="/images/icons/add.png" alt="Open" />)}

    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, itemName, ...restProps }: AccordionBodyProps) {
  const { toggleItem } = ToggleContext.useContext()
  return (
    <Body className={toggleItem === itemName ? 'open' : 'closed'} {...restProps}>
      <span>{children}</span>
    </Body>
  );
};
