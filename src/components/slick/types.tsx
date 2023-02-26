export interface SlickItemProps extends React.ComponentPropsWithoutRef<"div"> {
  width: number;
}

export interface SlickItemImageProps extends React.ComponentPropsWithoutRef<"div"> {
  width: number;
  src: string;
  title: string;
}

export interface SlickProps extends React.ComponentPropsWithoutRef<"div"> {}

export interface SlickContentProps extends React.ComponentPropsWithoutRef<"div"> {
  translateXValue?: number;
  transitionDurationValue?: number;
}

export interface SlickControlProps extends React.ComponentPropsWithoutRef<"div"> {
  direction: string;
  currentTop: number | null;
  currentHeight: number | null;
}

export interface DotItemProps extends React.ComponentPropsWithoutRef<"div"> {
  active: boolean;
  colors: DotColors;
}

export interface DotColors {
  a: string;
  b: string;
}

export interface DotCompProps extends React.ComponentPropsWithoutRef<"div"> {}
