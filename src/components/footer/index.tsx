import { Container, Row, Column, Link, Title, Text, Break, AuthorArea, AuthorAreaIcons, AuthorTitle } from "./styles";
import { FooterBreakProps, FooterColumnProps, FooterContainerProps, FooterLinkProps, FooterRowProps, FooterTextProps, FooterTitleProps } from "./types";

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

Footer.AuthorTitle = function FooterAuthorTitle({ children, ...restProps }: FooterTitleProps) {
  return <AuthorTitle {...restProps}>{children}</AuthorTitle>;
};

Footer.Text = function FooterText({ children, ...restProps }: FooterTextProps) {
  return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ ...restProps }: FooterBreakProps) {
  return <Break {...restProps} />;
};

Footer.AuthorArea = function FooterAuthorArea({ children, ...restProps }: FooterContainerProps) {
  return <AuthorArea {...restProps}>{children}</AuthorArea>;
};

Footer.AuthorAreaIcons = function FooterAuthorAreaIcons({ children, ...restProps }: FooterContainerProps) {
  return <AuthorAreaIcons {...restProps}>{children}</AuthorAreaIcons>;
};
