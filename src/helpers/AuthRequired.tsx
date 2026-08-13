import { ReactNode, useContext } from "react";
import { UserContext } from "../components/context/UserContext";
import { Navigate } from "react-router-dom";

export function AuthRequired({ children }: { children: ReactNode }) {
    const { userName } = useContext(UserContext)
    if (!userName) {
        return <Navigate to='/login' replace />
    }
    return children;
}