export interface FagItem {
    id: number;
    header: string;
    body: string;
}

export interface ToggleContextProps {
    toggleItem: string;
    setToggleItem: (item: string) => void;
}