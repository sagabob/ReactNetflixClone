
import { Container, Row, Column, Link, Title, Text, Break } from './styles';
import { FooterBreakProps, FooterColumnProps, FooterContainerProps, FooterLinkProps, FooterRowProps, FooterTextProps, FooterTitleProps } from './types';

export default function Footer({ children, ...restProps }: FooterContainerProps) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }: FooterRowProps) {
    return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }: FooterColumnProps) {
    return <Column {...restProps}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restProps }: FooterLinkProps) {
    return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }: FooterTitleProps) {
    return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }: FooterTextProps) {
    return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }: FooterBreakProps) {
    return <Break {...restProps} />;
};
