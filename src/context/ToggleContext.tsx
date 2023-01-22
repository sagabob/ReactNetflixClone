import { createContext } from "react";
import { ToggleContextProps } from "./types";

export const ToggleContext = createContext<ToggleContextProps|undefined>(undefined);