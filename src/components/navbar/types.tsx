export interface NavbarAreaProps extends React.ComponentPropsWithoutRef<"div"> {
    isScrolled: boolean
}

export interface NavbarLeftMenuProps extends React.ComponentPropsWithoutRef<"ul"> {
}

export interface NavbarLeftMenuItemProps extends React.ComponentPropsWithoutRef<"li"> {
}


export interface NavbarLeftMenuAreaProps extends React.ComponentPropsWithoutRef<"div"> {
}


export interface NavbarRightMenuAreaProps extends React.ComponentPropsWithoutRef<"div"> {
}

export interface NavbarRightMenuProps extends React.ComponentPropsWithoutRef<"div"> {
}

export interface NavbarLogoProps extends React.ComponentPropsWithoutRef<"img"> {
    to: string;
}