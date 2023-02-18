import { Content, Control, Galery, Item, ItemImage } from "./styles";
import { SlickContentProps, SlickControlProps, SlickItemImageProps, SlickItemProps, SlickProps } from "./types";
import { ChevronRight, ChevronLeft } from "@emotion-icons/bootstrap";

const Slick = function ({ children, ...restProps }: SlickProps) {
  return <Galery {...restProps}>{children}</Galery>;
};

Slick.Content = function ({ children, ...restProps }: SlickContentProps) {
  return <Content {...restProps}>{children}</Content>;
};

Slick.Item = function ({ children, width, src, title, ...restProps }: SlickItemImageProps) {
  return (
    <Item width={width} {...restProps}>
      <ItemImage src={src} alt={title} />
    </Item>
  );
};

Slick.EmptyItem = function ({ children, width, ...restProps }: SlickItemProps) {
  return <Item width={width} {...restProps}></Item>;
};

Slick.Control = function ({ children, direction, onClick, ...restProps }: SlickControlProps) {
  return (
    <Control direction={direction} {...restProps}>
      <div className="control-arrow" onClick={onClick}>
        {direction === "right" ? <ChevronRight /> : <ChevronLeft />}
      </div>
    </Control>
  );
};

export default Slick;
