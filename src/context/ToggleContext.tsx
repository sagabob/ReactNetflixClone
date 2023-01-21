import { createContext } from "react";
import { FagItem } from "./types";

export const ToggleContext = createContext<FagItem|null>(null);