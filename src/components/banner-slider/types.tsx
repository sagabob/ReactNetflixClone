import { MovieType } from "../../data/types";

export interface SliderProps extends React.ComponentPropsWithoutRef<"div"> {}

export interface SliderContentProps extends React.ComponentPropsWithoutRef<"div"> {}

export interface SliderCompProps extends React.ComponentPropsWithoutRef<"div"> {
  width: number;
  index: number;
  translateDuration?: number;
  transition: boolean;
  translateDrag?: number;
}

export interface SliderImageProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
}

export interface ArrowCompProps extends React.ComponentPropsWithoutRef<"div"> {
  hover: boolean;
  direction: string;
}

export interface ArrowIconProps extends React.ComponentPropsWithoutRef<"div"> {
  displayArrows: boolean;
  direction: string;
}

export interface DotsContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  displayDot: boolean;
}

export interface DotCompProps extends React.ComponentPropsWithoutRef<"div"> {
  active: boolean;
  colors: DotColors;
}

export interface DotColors {
  a: string;
  b: string;
}

export interface SliderDataProps extends React.ComponentPropsWithoutRef<"div"> {
  movies: MovieType[];
}
