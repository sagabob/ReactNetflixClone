import { Area, Content, Control, DotArea, Galery, Heading, Item, ItemButton, ItemDetail, ItemDetailLeft, ItemDetailRight, ItemHeading, ItemImage } from "./styles";
import { DotCompProps, SlickContentProps, SlickControlProps, SlickItemImageProps, SlickItemProps, SlickProps } from "./types";
import { ChevronRight, ChevronLeft, HandThumbsUp, PlayCircle, PlusCircle, ArrowDownCircle } from "@emotion-icons/bootstrap";

import { forwardRef } from "react";

const Slick = function ({ children, ...restProps }: SlickProps) {
  return <Area {...restProps}>{children}</Area>;
};

Slick.Heading = function ({ children, ...restProps }: SlickProps) {
  return <Heading {...restProps}>{children}</Heading>;
};

Slick.Galery = function ({ children, ...restProps }: SlickProps) {
  return <Galery {...restProps}>{children}</Galery>;
};

Slick.Content = function ({ children, ...restProps }: SlickContentProps) {
  return <Content {...restProps}>{children}</Content>;
};

Slick.Item = function ({ children, width, src, title, ...restProps }: SlickItemImageProps) {
  return (
    <Item width={width} {...restProps}>
      <ItemImage src={src} alt={title} />
      <ItemHeading>{title}</ItemHeading>
      <ItemDetail>
        <ItemDetailLeft>
          <ItemButton>
            <PlayCircle />
          </ItemButton>
          <ItemButton>
            <PlusCircle />
          </ItemButton>
          <ItemButton>
            <HandThumbsUp />
          </ItemButton>
        </ItemDetailLeft>
        <ItemDetailRight>
          <ItemButton>
            <ArrowDownCircle />
          </ItemButton>
        </ItemDetailRight>
      </ItemDetail>
    </Item>
  );
};

Slick.ItemRef = forwardRef<HTMLImageElement, SlickItemImageProps>(({ children, width, src, title, ...restProps }, ref) => {
  return (
    <Item width={width} {...restProps}>
      <ItemImage src={src} alt={title} ref={ref} />
      <ItemHeading>{title}</ItemHeading>
      <ItemDetail>
        <ItemDetailLeft>
          <ItemButton>
            <PlayCircle />
          </ItemButton>
          <ItemButton>
            <PlusCircle />
          </ItemButton>
          <ItemButton>
            <HandThumbsUp />
          </ItemButton>
        </ItemDetailLeft>
        <ItemDetailRight>
          <ItemButton>
            <ArrowDownCircle />
          </ItemButton>
        </ItemDetailRight>
      </ItemDetail>
    </Item>
  );
});

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

Slick.DotArea = function ({ children, ...restProps }: DotCompProps) {
  return <DotArea {...restProps}>{children}</DotArea>;
};

export default Slick;
