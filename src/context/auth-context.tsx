import createSafeContext from "../lib/createSafeContext";
import { AuthContextModel } from "./types";

export const AuthContext = createSafeContext<AuthContextModel>()