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

export interface DotContainerProps {
  lowestVisibleIndex: number;
  itemsInRow: number;
  totalItems: number;
}
