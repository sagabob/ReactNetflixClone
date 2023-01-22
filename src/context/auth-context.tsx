import React from "react";
import { AuthContextModel } from "./types";

export const AuthContext = React.createContext<AuthContextModel | undefined>(undefined)