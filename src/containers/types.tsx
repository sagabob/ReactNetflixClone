import { MovieType } from "../data/types";

export interface RowProps {
  title: string;
  fetchUrl: string;
}

export interface BannerProps {
  fetchUrl: string;
}

export interface SlickProps {
  fetchUrl: string;
  title: string;
}

export interface SlickContentProps {
  lowestVisibleIndex: number;
  itemsInRow: number;

  sliderHasMoved: boolean;
  movies: MovieType[];
}

export interface DotContainerProps {
  lowestVisibleIndex: number;
  itemsInRow: number;
  totalItems: number;
}
