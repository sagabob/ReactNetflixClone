import { ReactNode } from "react";

export interface FormContainerProps extends React.ComponentPropsWithoutRef<"div"> { }

export interface FormErrorProps extends React.ComponentPropsWithoutRef<"div"> { }

export interface FormBaseProps extends React.ComponentPropsWithoutRef<"form"> { }

export interface FormTitleProps extends React.ComponentPropsWithoutRef<"h1"> { }

export interface FormTextProps extends React.ComponentPropsWithoutRef<"p"> { }

export interface FormTextSmallProps extends React.ComponentPropsWithoutRef<"p"> { }

export interface FormLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    to: string
}

export interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> { }

export interface FormButtonProps extends React.ComponentPropsWithoutRef<"button"> { }