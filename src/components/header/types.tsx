import { ReactNode } from "react";

export interface HeaderCoreProps extends React.ComponentPropsWithoutRef<"div"> {}

export interface HeaderBackgroundProps extends React.ComponentPropsWithoutRef<"div"> {
  src?: string;
}

export interface HeaderProps extends React.ComponentPropsWithoutRef<"div"> {
  src?: string;
}

export interface HeaderLogoProps extends React.ComponentPropsWithoutRef<"img"> {
  to: string;
}

export interface HeaderButtonLinkProps {
  children: ReactNode;
  to: string;
}
