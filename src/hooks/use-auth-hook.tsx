import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { AuthContextModel } from "../context/types";

function useAuth(): AuthContextModel {

    const context = useContext(AuthContext)

    if (context === undefined) {
        throw new Error('useAuth must be used within Provider')
    }
    return context
}

export default useAuth;