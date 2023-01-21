import React from 'react';
import { Container, Item, Inner, Pane, Title, SubTitle, Image } from './styles';
import {JumbotronContainerProps, JumbotronImgProps, JumbotronInnerProps, JumbotronPaneProps, JumbotronSubTitleProps, JumbotronTitleProps } from './types';

export default function Jumbotron({ direction = 'row', children, ...restProps }: JumbotronInnerProps) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>{children}</Inner>
        </Item>
    );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }: JumbotronContainerProps) {
    return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }: JumbotronPaneProps ) {
    return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }: JumbotronTitleProps) {
    return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }: JumbotronSubTitleProps) {
    return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }: JumbotronImgProps) {
    return <Image {...restProps} />;
};
